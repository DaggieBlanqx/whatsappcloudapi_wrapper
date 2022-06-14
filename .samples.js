// Text Messages
let PHONE_NUMBER_ID = 'PHONE_NUMBER_ID';
let PHONE_NUMBER = 'PHONE_NUMBER';
let TIMESTAMP = 'TIMESTAMP';
let LOCATION_ADDRESS = 'LOCATION_ADDRESS';
let LOCATION_LATITUDE = 'LOCATION_LATITUDE';
let LOCATION_LONGITUDE = 'LOCATION_LONGITUDE';
let LOCATION_NAME = 'LOCATION_NAME';
let NEW_PHONE_NUMBER = 'NEW_PHONE_NUMBER';

let textMessage = {
    object: 'whatsapp_business_account',
    entry: [
        {
            id: 'WHATSAPP_BUSINESS_ACCOUNT_ID',
            changes: [
                {
                    value: {
                        messaging_product: 'whatsapp',
                        metadata: {
                            display_phone_number: PHONE_NUMBER,
                            phone_number_id: PHONE_NUMBER_ID,
                        },
                        contacts: [
                            {
                                profile: {
                                    name: 'NAME',
                                },
                                wa_id: PHONE_NUMBER,
                            },
                        ],
                        messages: [
                            {
                                from: PHONE_NUMBER,
                                id: 'wamid.ID',
                                timestamp: TIMESTAMP,
                                text: {
                                    body: 'MESSAGE_BODY',
                                },
                                type: 'text',
                            },
                        ],
                    },
                    field: 'messages',
                },
            ],
        },
    ],
};
// Media Messages
let mediaMessage = {
    object: 'whatsapp_business_account',
    entry: [
        {
            id: 'WHATSAPP_BUSINESS_ACCOUNT_ID',
            changes: [
                {
                    value: {
                        messaging_product: 'whatsapp',
                        metadata: {
                            display_phone_number: PHONE_NUMBER,
                            phone_number_id: PHONE_NUMBER_ID,
                        },
                        contacts: [
                            {
                                profile: {
                                    name: 'NAME',
                                },
                                wa_id: 'WHATSAPP_ID',
                            },
                        ],
                        messages: [
                            {
                                from: PHONE_NUMBER,
                                id: 'wamid.ID',
                                timestamp: TIMESTAMP,
                                type: 'image',
                                image: {
                                    caption: 'CAPTION',
                                    mime_type: 'image/jpeg',
                                    sha256: 'IMAGE_HASH',
                                    id: 'ID',
                                },
                            },
                        ],
                    },
                    field: 'messages',
                },
            ],
        },
    ],
};
// Sticker message
let stickerMessage = {
    object: 'whatsapp_business_account',
    entry: [
        {
            id: 'ID',
            changes: [
                {
                    value: {
                        messaging_product: 'whatsapp',
                        metadata: {
                            display_phone_number: 'PHONE_NUMBER',
                            phone_number_id: 'PHONE_NUMBER_ID',
                        },
                        contacts: [
                            {
                                profile: {
                                    name: 'NAME',
                                },
                                wa_id: 'ID',
                            },
                        ],
                        messages: [
                            {
                                from: 'SENDER_PHONE_NUMBER',
                                id: 'wamid.ID',
                                timestamp: 'TIMESTAMP',
                                type: 'sticker',
                                sticker: {
                                    mime_type: 'image/webp',
                                    sha256: 'HASH',
                                    id: 'ID',
                                },
                            },
                        ],
                    },
                    field: 'messages',
                },
            ],
        },
    ],
};
// Unknown Messages
let unknownMessage = {
    object: 'whatsapp_business_account',
    entry: [
        {
            id: 'WHATSAPP_BUSINESS_ACCOUNT_ID',
            changes: [
                {
                    value: {
                        messaging_product: 'whatsapp',
                        metadata: {
                            display_phone_number: 'PHONE_NUMBER',
                            phone_number_id: 'PHONE_NUMBER_ID',
                        },
                        contacts: [
                            {
                                profile: {
                                    name: 'NAME',
                                },
                                wa_id: 'WHATSAPP_ID',
                            },
                        ],
                        messages: [
                            {
                                from: 'PHONE_NUMBER',
                                id: 'wamid.ID',
                                timestamp: 'TIMESTAMP',
                                errors: [
                                    {
                                        code: 131051,
                                        details:
                                            'Message type is not currently supported',
                                        title: 'Unsupported message type',
                                    },
                                ],
                                type: 'unknown',
                            },
                        ],
                    },
                    field: 'messages',
                },
            ],
        },
    ],
};
// Location Messages
let locationMessage = {
    object: 'whatsapp_business_account',
    entry: [
        {
            id: 'WHATSAPP_BUSINESS_ACCOUNT_ID',
            changes: [
                {
                    value: {
                        messaging_product: 'whatsapp',
                        metadata: {
                            display_phone_number: 'PHONE_NUMBER',
                            phone_number_id: 'PHONE_NUMBER_ID',
                        },
                        contacts: [
                            {
                                profile: {
                                    name: 'NAME',
                                },
                                wa_id: 'WHATSAPP_ID',
                            },
                        ],
                        messages: [
                            {
                                from: 'PHONE_NUMBER',
                                id: 'wamid.ID',
                                timestamp: 'TIMESTAMP',
                                location: {
                                    latitude: LOCATION_LATITUDE,
                                    longitude: LOCATION_LONGITUDE,
                                    name: LOCATION_NAME,
                                    address: LOCATION_ADDRESS,
                                },
                            },
                        ],
                    },
                    field: 'messages',
                },
            ],
        },
    ],
};
// Contacts Messages
let contactMessage = {
    object: 'whatsapp_business_account',
    entry: [
        {
            id: 'WHATSAPP_BUSINESS_ACCOUNT_ID',
            changes: [
                {
                    value: {
                        messaging_product: 'whatsapp',
                        metadata: {
                            display_phone_number: 'PHONE_NUMBER',
                            phone_number_id: 'PHONE_NUMBER_ID',
                        },
                        contacts: [
                            {
                                profile: {
                                    name: 'NAME',
                                },
                                wa_id: 'WHATSAPP_ID',
                            },
                        ],
                        messages: [
                            {
                                from: 'PHONE_NUMBER',
                                id: 'wamid.ID',
                                timestamp: 'TIMESTAMP',
                                contacts: [
                                    {
                                        addresses: [
                                            {
                                                city: 'CONTACT_CITY',
                                                country: 'CONTACT_COUNTRY',
                                                country_code:
                                                    'CONTACT_COUNTRY_CODE',
                                                state: 'CONTACT_STATE',
                                                street: 'CONTACT_STREET',
                                                type: 'HOME or WORK',
                                                zip: 'CONTACT_ZIP',
                                            },
                                        ],
                                        birthday: 'CONTACT_BIRTHDAY',
                                        emails: [
                                            {
                                                email: 'CONTACT_EMAIL',
                                                type: 'WORK or HOME',
                                            },
                                        ],
                                        name: {
                                            formatted_name:
                                                'CONTACT_FORMATTED_NAME',
                                            first_name: 'CONTACT_FIRST_NAME',
                                            last_name: 'CONTACT_LAST_NAME',
                                            middle_name: 'CONTACT_MIDDLE_NAME',
                                            suffix: 'CONTACT_SUFFIX',
                                            prefix: 'CONTACT_PREFIX',
                                        },
                                        org: {
                                            company: 'CONTACT_ORG_COMPANY',
                                            department:
                                                'CONTACT_ORG_DEPARTMENT',
                                            title: 'CONTACT_ORG_TITLE',
                                        },
                                        phones: [
                                            {
                                                phone: 'CONTACT_PHONE',
                                                wa_id: 'CONTACT_WA_ID',
                                                type: 'HOME or WORK>',
                                            },
                                        ],
                                        urls: [
                                            {
                                                url: 'CONTACT_URL',
                                                type: 'HOME or WORK',
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    field: 'messages',
                },
            ],
        },
    ],
};
// Received Callback from a Quick Reply Button
let quickReplyMessage = {
    object: 'whatsapp_business_account',
    entry: [
        {
            id: 'WHATSAPP_BUSINESS_ACCOUNT_ID',
            changes: [
                {
                    value: {
                        messaging_product: 'whatsapp',
                        metadata: {
                            display_phone_number: PHONE_NUMBER,
                            phone_number_id: PHONE_NUMBER_ID,
                        },
                        contacts: [
                            {
                                profile: {
                                    name: 'NAME',
                                },
                                wa_id: 'WHATSAPP_ID',
                            },
                        ],
                        messages: [
                            {
                                context: {
                                    from: PHONE_NUMBER,
                                    id: 'wamid.ID',
                                },
                                from: '16315551234',
                                id: 'wamid.ID',
                                timestamp: TIMESTAMP,
                                type: 'button',
                                button: {
                                    text: 'No',
                                    payload: 'No-Button-Payload',
                                },
                            },
                        ],
                    },
                    field: 'messages',
                },
            ],
        },
    ],
};
// Received Answer From List Message
let listMessage = {
    object: 'whatsapp_business_account',
    entry: [
        {
            id: 'WHATSAPP_BUSINESS_ACCOUNT_ID',
            changes: [
                {
                    value: {
                        messaging_product: 'whatsapp',
                        metadata: {
                            display_phone_number: 'PHONE_NUMBER',
                            phone_number_id: 'PHONE_NUMBER_ID',
                        },
                        contacts: [
                            {
                                profile: {
                                    name: 'NAME',
                                },
                                wa_id: 'PHONE_NUMBER_ID',
                            },
                        ],
                        messages: [
                            {
                                from: PHONE_NUMBER_ID,
                                id: 'wamid.ID',
                                timestamp: TIMESTAMP,
                                interactive: {
                                    list_reply: {
                                        id: 'list_reply_id',
                                        title: 'list_reply_title',
                                        description: 'list_reply_description',
                                    },
                                    type: 'list_reply',
                                },
                                type: 'interactive',
                            },
                        ],
                    },
                    field: 'messages',
                },
            ],
        },
    ],
};
// Received Answer to Reply Button
let replyButtonMessage = {
    object: 'whatsapp_business_account',
    entry: [
        {
            id: 'WHATSAPP_BUSINESS_ACCOUNT_ID',
            changes: [
                {
                    value: {
                        messaging_product: 'whatsapp',
                        metadata: {
                            display_phone_number: 'PHONE_NUMBER',
                            phone_number_id: PHONE_NUMBER_ID,
                        },
                        contacts: [
                            {
                                profile: {
                                    name: 'NAME',
                                },
                                wa_id: 'PHONE_NUMBER_ID',
                            },
                        ],
                        messages: [
                            {
                                from: PHONE_NUMBER_ID,
                                id: 'wamid.ID',
                                timestamp: TIMESTAMP,
                                interactive: {
                                    button_reply: {
                                        id: 'unique-button-identifier-here',
                                        title: 'button-text',
                                    },
                                    type: 'button_reply',
                                },
                                type: 'interactive',
                            },
                        ],
                    },
                    field: 'messages',
                },
            ],
        },
    ],
};
// Received Message Triggered by Click to WhatsApp Ads

let adsMessage = {
    object: 'whatsapp_business_account',
    entry: [
        {
            id: 'ID',
            changes: [
                {
                    value: {
                        messaging_product: 'whatsapp',
                        metadata: {
                            display_phone_number: 'PHONE_NUMBER',
                            phone_number_id: 'PHONE_NUMBER_ID',
                        },
                        contacts: [
                            {
                                profile: {
                                    name: 'NAME',
                                },
                                wa_id: 'ID',
                            },
                        ],
                        messages: [
                            {
                                referral: {
                                    source_url: 'AD_OR_POST_FB_URL',
                                    source_id: 'ADID',
                                    source_type: 'ad or post',
                                    headline: 'AD_TITLE',
                                    body: 'AD_DESCRIPTION',
                                    media_type: 'image or video',
                                    image_url: 'RAW_IMAGE_URL',
                                    video_url: 'RAW_VIDEO_URL',
                                    thumbnail_url: 'RAW_THUMBNAIL_URL',
                                },
                                from: 'SENDER_PHONE_NUMBERID',
                                id: 'wamid.ID',
                                timestamp: 'TIMESTAMP',
                                type: 'text',
                                text: {
                                    body: 'BODY',
                                },
                            },
                        ],
                    },
                    field: 'messages',
                },
            ],
        },
    ],
};

// User Changed Number Notification
let numberChangedMessage = {
    object: 'whatsapp_business_account',
    entry: [
        {
            id: 'WHATSAPP_BUSINESS_ACCOUNT_ID',
            changes: [
                {
                    value: {
                        messaging_product: 'whatsapp',
                        metadata: {
                            display_phone_number: PHONE_NUMBER,
                            phone_number_id: PHONE_NUMBER_ID,
                        },
                        messages: [
                            {
                                from: PHONE_NUMBER,
                                id: 'wamid.ID',
                                system: {
                                    body: 'NAME changed from PHONE_NUMBER to PHONE_NUMBER',
                                    new_wa_id: NEW_PHONE_NUMBER,
                                    type: 'user_changed_number',
                                },
                                timestamp: TIMESTAMP,
                                type: 'system',
                            },
                        ],
                    },
                    field: 'messages',
                },
            ],
        },
    ],
};

// Message Status Updates
//Status: Message Sent
let messageSent = {
    object: 'whatsapp_business_account',
    entry: [
        {
            id: 'WHATSAPP_BUSINESS_ACCOUNT_ID',
            changes: [
                {
                    value: {
                        messaging_product: 'whatsapp',
                        metadata: {
                            display_phone_number: 'PHONE_NUMBER',
                            phone_number_id: 'PHONE_NUMBER_ID',
                        },
                        statuses: [
                            {
                                id: 'wamid.ID',
                                recipient_id: 'PHONE_NUMBER',
                                status: 'sent',
                                timestamp: 'TIMESTAMP',
                                conversation: {
                                    id: 'CONVERSATION_ID',
                                    expiration_timestamp: TIMESTAMP,
                                    origin: {
                                        type: 'user_initiated',
                                    },
                                },
                                pricing: {
                                    pricing_model: 'CBP',
                                    billable: true,
                                    category: 'user_initiated',
                                },
                            },
                        ],
                    },
                    field: 'messages',
                },
            ],
        },
    ],
};

// The following notification is received when a business sends a message as part of a business-initiated conversation:

let messageSentBusinessInitiated = {
    object: 'whatsapp_business_account',
    entry: [
        {
            id: 'WHATSAPP_BUSINESS_ACCOUNT_ID',
            changes: [
                {
                    value: {
                        messaging_product: 'whatsapp',
                        metadata: {
                            display_phone_number: 'PHONE_NUMBER',
                            phone_number_id: 'PHONE_NUMBER_ID',
                        },
                        statuses: [
                            {
                                id: 'wamid.ID',
                                recipient_id: 'PHONE_NUMBER',
                                status: 'sent',
                                timestamp: 'TIMESTAMP',
                                conversation: {
                                    id: 'CONVERSATION_ID',
                                    expiration_timestamp: TIMESTAMP,
                                    origin: {
                                        type: 'business_initated',
                                    },
                                },
                                pricing: {
                                    pricing_model: 'CBP',
                                    billable: true,
                                    category: 'business_initated',
                                },
                            },
                        ],
                    },
                    field: 'messages',
                },
            ],
        },
    ],
};

// The following notification is received when a business sends a message in reply to a user-initiated conversation originating from free entry points:
let messageSentUserInitiated = {
    object: 'whatsapp_business_account',
    entry: [
        {
            id: 'WHATSAPP_BUSINESS_ACCOUNT_ID',
            changes: [
                {
                    value: {
                        messaging_product: 'whatsapp',
                        metadata: {
                            display_phone_number: 'PHONE_NUMBER',
                            phone_number_id: 'PHONE_NUMBER_ID',
                        },
                        statuses: [
                            {
                                id: 'wamid.ID',
                                status: 'sent',
                                timestamp: TIMESTAMP,
                                recipient_id: PHONE_NUMBER,
                                conversation: {
                                    id: 'CONVERSATION_ID',
                                    expiration_timestamp: TIMESTAMP,
                                    origin: {
                                        type: 'referral_conversion',
                                    },
                                },
                                pricing: {
                                    billable: false,
                                    pricing_model: 'CBP',
                                    category: 'referral_conversion',
                                },
                            },
                        ],
                    },
                    field: 'messages',
                },
            ],
        },
    ],
};

// Status: Message Delivered

let messageDelivered = {
    object: 'whatsapp_business_account',
    entry: [
        {
            id: 'WHATSAPP_BUSINESS_ACCOUNT_ID',
            changes: [
                {
                    value: {
                        messaging_product: 'whatsapp',
                        metadata: {
                            display_phone_number: 'PHONE_NUMBER',
                            phone_number_id: 'PHONE_NUMBER_ID',
                        },
                        statuses: [
                            {
                                id: 'wamid.ID',
                                recipient_id: 'PHONE_NUMBER',
                                status: 'delivered',
                                timestamp: 'TIMESTAMP',
                                conversation: {
                                    id: 'CONVERSATION_ID',
                                    expiration_timestamp: TIMESTAMP,
                                    origin: {
                                        type: 'user_initiated',
                                    },
                                },
                                pricing: {
                                    pricing_model: 'CBP',
                                    billable: true,
                                    category: 'user_initiated',
                                },
                            },
                        ],
                    },
                    field: 'messages',
                },
            ],
        },
    ],
};

// The following notification is received when a business’ message is delivered and that message is part of a business-initiated conversation:

let messageDeliveredBusinessInitiated = {
    object: 'whatsapp_business_account',
    entry: [
        {
            id: 'WHATSAPP_BUSINESS_ACCOUNT_ID',
            changes: [
                {
                    value: {
                        messaging_product: 'whatsapp',
                        metadata: {
                            display_phone_number: 'PHONE_NUMBER',
                            phone_number_id: 'PHONE_NUMBER_ID',
                        },
                        statuses: [
                            {
                                id: 'wamid.ID',
                                recipient_id: 'PHONE_NUMBER',
                                status: 'delivered',
                                timestamp: 'TIMESTAMP',
                                conversation: {
                                    id: 'CONVERSATION_ID',
                                    expiration_timestamp: TIMESTAMP,
                                    origin: {
                                        type: 'business_initiated',
                                    },
                                },
                                pricing: {
                                    pricing_model: 'CBP',
                                    billable: true,
                                    category: 'business-initiated',
                                },
                            },
                        ],
                    },
                    field: 'messages',
                },
            ],
        },
    ],
};

// The following notification is received when a business’ message is delivered and that message is part of a user-initiated conversation originating from a free entry point:

let messageDeliveredUserInitiated = {
    object: 'whatsapp_business_account',
    entry: [
        {
            id: 'WHATSAPP_BUSINESS_ACCOUNT_ID',
            changes: [
                {
                    value: {
                        messaging_product: 'whatsapp',
                        metadata: {
                            display_phone_number: 'PHONE_NUMBER',
                            phone_number_id: 'PHONE_NUMBER_ID',
                        },
                        statuses: [
                            {
                                id: 'wamid.ID',
                                status: 'sent',
                                timestamp: 'TIMESTAMP',
                                recipient_id: 'PHONE_NUMBER',
                                conversation: {
                                    id: 'CONVERSATION_ID',
                                    expiration_timestamp: TIMESTAMP,
                                    origin: {
                                        type: 'referral_conversion',
                                    },
                                },
                                pricing: {
                                    billable: false,
                                    pricing_model: 'CBP',
                                    category: 'referral_conversion',
                                },
                            },
                        ],
                    },
                    field: 'messages',
                },
            ],
        },
    ],
};

// Status: Message Deleted
let messageDeleted = {
    object: 'whatsapp_business_account',
    entry: [
        {
            id: 'WHATSAPP_BUSINESS_ACCOUNT_ID',
            changes: [
                {
                    value: {
                        messaging_product: 'whatsapp',
                        metadata: {
                            display_phone_number: PHONE_NUMBER,
                            phone_number_id: PHONE_NUMBER,
                        },
                        contacts: [
                            {
                                profile: {
                                    name: 'NAME',
                                },
                                wa_id: PHONE_NUMBER,
                            },
                        ],
                        messages: [
                            {
                                from: PHONE_NUMBER,
                                id: 'wamid.ID',
                                timestamp: TIMESTAMP,
                                errors: [
                                    {
                                        code: 131051,
                                        details:
                                            'Message type is not currently supported',
                                        title: 'Unsupported message type',
                                    },
                                ],
                                type: 'unsupported',
                            },
                        ],
                    },
                    field: 'messages',
                },
            ],
        },
    ],
};

// Note that there are other user behaviors that can trigger this same error message.
// Status: Message Failed
let messageFailed = {
    object: 'whatsapp_business_account',
    entry: [
        {
            id: 'WHATSAPP_BUSINESS_ACCOUNT_ID',
            changes: [
                {
                    value: {
                        messaging_product: 'whatsapp',
                        metadata: {
                            display_phone_number: PHONE_NUMBER,
                            phone_number_id: PHONE_NUMBER_ID,
                        },
                        statuses: [
                            {
                                id: 'wamid.ID',
                                status: 'failed',
                                timestamp: TIMESTAMP,
                                recipient_id: PHONE_NUMBER,
                                errors: [
                                    {
                                        code: 131014,
                                        title: 'Request for url https://URL.jpg failed with error: 404 (Not Found)',
                                    },
                                ],
                            },
                        ],
                    },
                    field: 'messages',
                },
            ],
        },
    ],
};

let combineAll = {
    textMessage,
    mediaMessage,
    stickerMessage,
    unknownMessage,
    locationMessage,
    contactMessage,
    quickReplyMessage,
    listMessage,
    replyButtonMessage,
    adsMessage,
    numberChangedMessage,
    messageSent,
    messageSentBusinessInitiated,
    messageSentUserInitiated,
    messageDelivered,
    messageDeliveredBusinessInitiated,
    messageDeliveredUserInitiated,
    messageDeleted,
    messageFailed,
};

const ensureInputIsValidWhatsappMessage = (input) => {
    // THIS FUNCTION IS NOT YET OPTIMIZED FOR PERFORMANCE. IT IS ONLY MADE AS A TEMPORARY SOLUTION.

    if (!input) {
        throw new Error('requestBody is required');
    }

    //first check if the message is a whatsapp message
    if (!input.object || input.object !== 'whatsapp_business_account') {
        throw new Error(
            'requestBody is not a valid whatsapp message. Hint: check the "object" property'
        );
    }

    if (!input.entry || !input.entry?.length) {
        throw new Error(
            'requestBody is not a valid whatsapp message. Hint: check the "entry" property'
        );
    }

    if (
        !input.entry[0].changes?.length ||
        input.entry[0].changes[0].field !== 'messages'
    ) {
        throw new Error(
            'requestBody is not a valid whatsapp message. Hint: check the "changes" property'
        );
    }

    let metadata = input.entry[0].changes[0].value.metadata;
    let contacts = input.entry[0].changes[0].value.contacts?.length
        ? input.entry[0].changes[0].value.contacts[0]
        : null;
    let message = input.entry[0].changes[0].value?.messages?.length
        ? input.entry[0].changes[0].value.messages[0]
        : null;
    // console.log({THEmessage:input.entry[0].changes[0].value.messages[0]})
    let actualType;
    if (message?.type) {
        actualType = message.type;
    } else {
        if (message?.location) {
            actualType = 'location';
        } else if (message?.contacts) {
            actualType = 'contact';
        }
    }

    let isNotificationMessage;
    if (input.entry[0].changes[0].value.statuses?.length) {
        isNotificationMessage = true;
    } else {
        if (actualType === 'unsupported' && message.errors?.length) {
            isNotificationMessage = true;
        } else {
            isNotificationMessage = false;
        }
    }

    let WABA_ID = input.entry[0].id;

    let finalType;
    if (actualType === 'text' && message.referral) {
        finalType = 'adMessage';
    } else if (actualType === 'text') {
        finalType = 'textMessage';
    } else if (actualType === 'sticker') {
        finalType = 'stickerMessage';
    } else if (actualType === 'image') {
        finalType = 'mediaMessage';
    } else if (actualType === 'location') {
        finalType = 'locationMessage';
    } else if (actualType === 'contact') {
        finalType = 'contactMessage';
    } else if (actualType === 'button') {
        finalType = 'quickReplyMessage';
    } else if (
        actualType === 'interactive' &&
        message.interactive.type === 'list_reply'
    ) {
        finalType = 'listMessage';
    } else if (
        actualType === 'interactive' &&
        message.interactive.type === 'button_reply'
    ) {
        finalType = 'replyButtonMessage';
    } else if (actualType === 'unsupported') {
        finalType = 'unknownMessage';
    }

    let output = {
        WABA_ID,
        isNotificationMessage,
        actualType,
        finalType,
        metadata,
        contacts,
        message,
    };

    return output;
};

// loop through all the messages and return the ones that are valid
Object.keys(combineAll).forEach((key) => {
    let input = combineAll[key];
    let output = ensureInputIsValidWhatsappMessage(input);
    console.log({ type: key, ...output });
});
