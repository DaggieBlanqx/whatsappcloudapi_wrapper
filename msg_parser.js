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

    // Messages vs Notifications
    let message = requestBody.entry[0].changes[0].value?.messages?.length
        ? requestBody.entry[0].changes[0].value.messages[0]
        : null;

    let notificationMessage = requestBody.entry[0].changes[0].value?.statuses
        ?.length
        ? requestBody.entry[0].changes[0].value.statuses[0]
        : null;

    const output = {
        metadata,
        contacts,
        WABA_ID,
    };

    if (notificationMessage) {
        output['isNotificationMessage'] = true;
        output['isMessage'] = false;
        output['notificationType'] = notificationMessage.status;
        notificationMessage['from'] = {
            name: null, //name is not available for notifications, it is only available for messages
            phone: notificationMessage.recipient_id,
        };
        output['notificationMessage'] = notificationMessage;
    } else if (message) {
        output['isNotificationMessage'] = false;
        output['isMessage'] = true;
        let msgType;
        if (message.type === 'text' && message.referral) {
            msgType = 'ad_message';
        } else if (message.type === 'text') {
            msgType = 'text_message';
        } else if (message.type === 'audio') {
            msgType = 'audio_message';
        } else if (message.type === 'sticker') {
            msgType = 'sticker_message';
        } else if (message.type === 'image') {
            msgType = 'media_message';
        } else if (message.location) {
            msgType = 'location_message';
        } else if (message.contacts) {
            msgType = 'contact_message';
        } else if (message.type === 'button') {
            msgType = 'quick_reply_message';
        } else if (message.type === 'interactive') {
            if (message.interactive?.type === 'list_reply') {
                msgType = 'radio_button_message';
                message['list_reply'] = message.interactive.list_reply;
            } else if (message.interactive?.type === 'button_reply') {
                msgType = 'simple_button_message';
                message['button_reply'] = message.interactive.button_reply;
            }
        } else if (message.type === 'unsupported') {
            msgType = 'unknown_message';
            if (message.errors?.length) {
                console.log({ Q: message.errors });
                output['isNotificationMessage'] = true;
                output['isMessage'] = false;
                notificationMessage = {
                    errors: message.errors,
                };
            }
        }
        message['type'] = msgType;
        message['from'] = {
            name: contacts.profile.name,
            phone: message?.from,
        };

        if (output.isMessage) {
            let thread = null;

            if (message.context) {
                thread = {
                    from: {
                        name: null,
                        phone: message.context?.from,
                        message_id: message.context?.id,
                    },
                };
            }

            output['message'] = {
                ...message,
                thread,
                message_id: message.id || null,
            };

            delete output.message.id; //keep the data light
            delete output.context; //keep the data light
        }
    } else {
        console.warn('An unidentified.');
    }

    return output;
};
