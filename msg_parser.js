'use strict';

module.exports = ({ requestBody, currentWABA_ID }) => {
    // THIS FUNCTION IS NOT YET OPTIMIZED FOR PERFORMANCE. IT IS ONLY MADE AS A TEMPORARY SOLUTION.
    if (!requestBody) {
        throw new Error('"requestBody" is required');
    }

    if (!currentWABA_ID) {
        throw new Error(
            'currentWABA_ID is required. This is the business ID that you have configured in your WABA account.'
        );
    }

    let WABA_ID = requestBody.entry[0]?.id; // extract the business ID from the webhook payload
    if (WABA_ID == 0) {
        signale.warn({
            message: `WABA_ID is 0. You seem to be testing with Meta test subscription. This is not really a valid WABA_ID. I recommend you to send an actual message from an actual whatsapp customer's number.`,
        });
    }

    if (!WABA_ID || WABA_ID !== currentWABA_ID) {
        throw new Error(
            'WABA_ID is not valid. Hint: the message is not intended for this Whatsapp Business Account.'
        );
    }

    //first check if the message is a whatsapp message
    if (
        !requestBody.object ||
        requestBody.object !== 'whatsapp_business_account'
    ) {
        throw new Error(
            'requestBody is not a valid whatsapp message. Hint: check the "object" property'
        );
    }

    if (!requestBody.entry || !requestBody.entry?.length) {
        throw new Error(
            'requestBody is not a valid whatsapp message. Hint: check the "entry" property'
        );
    }

    if (
        !requestBody.entry[0].changes?.length ||
        requestBody.entry[0].changes[0].field !== 'messages'
    ) {
        throw new Error(
            'requestBody is not a valid whatsapp message. Hint: check the "changes" property'
        );
    }

    let metadata = requestBody.entry[0].changes[0].value.metadata;
    let contacts = requestBody.entry[0].changes[0].value.contacts?.length
        ? requestBody.entry[0].changes[0].value.contacts[0]
        : null;
    let message = requestBody.entry[0].changes[0].value?.messages?.length
        ? requestBody.entry[0].changes[0].value.messages[0]
        : null;

    let actualType;
    if (message?.type) {
        actualType = message.type;
    } else if (message?.location) {
        actualType = 'location';
    } else if (message?.contacts) {
        actualType = 'contact';
    }

    let isNotificationMessage;
    if (requestBody.entry[0].changes[0].value.statuses?.length) {
        isNotificationMessage = true;
    } else {
        if (actualType === 'unsupported' && message.errors?.length) {
            isNotificationMessage = true;
        } else {
            isNotificationMessage = false;
        }
    }

    let msgType;
    if (actualType === 'text' && message.referral) {
        msgType = 'adMessage';
    } else if (actualType === 'text') {
        msgType = 'textMessage';
    } else if (actualType === 'sticker') {
        msgType = 'stickerMessage';
    } else if (actualType === 'image') {
        msgType = 'mediaMessage';
    } else if (actualType === 'location') {
        msgType = 'locationMessage';
    } else if (actualType === 'contact') {
        msgType = 'contactMessage';
    } else if (actualType === 'button') {
        msgType = 'quickReplyMessage';
    } else if (
        actualType === 'interactive' &&
        message.interactive.type === 'list_reply'
    ) {
        msgType = 'listMessage';
        message['list_reply'] = message.interactive.list_reply;
    } else if (
        actualType === 'interactive' &&
        message.interactive.type === 'button_reply'
    ) {
        msgType = 'replyButtonMessage';
        message['button_reply'] = message.interactive.button_reply;
    } else if (actualType === 'unsupported') {
        msgType = 'unknownMessage';
    }

    message['type'] = msgType;
    message['sender'] = {
        name: contacts.profile.name,
        phone: message.from,
    };

    return {
        WABA_ID,
        isNotificationMessage,
        actualType,
        msgType,
        metadata,
        contacts,
        message,
    };
};
