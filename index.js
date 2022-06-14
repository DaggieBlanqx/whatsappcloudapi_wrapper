'use strict';
const unirest = require('unirest');
const signale = require('signale');

const messageParser = require('./msg_parser.js');

class WhatsappCloud {
    constructor({
        accessToken,
        graphAPIVersion,
        senderPhoneNumberId,
        WABA_ID,
    }) {
        this.accessToken = accessToken;
        this.graphAPIVersion = graphAPIVersion || 'v13.0';
        this.senderPhoneNumberId = senderPhoneNumberId;
        this.baseUrl = `https://graph.facebook.com/${this.graphAPIVersion}/${this.senderPhoneNumberId}`;
        this.WABA_ID = WABA_ID;

        if (!this.accessToken) {
            throw new Error('Missing "accessToken"');
        }

        if (!this.senderPhoneNumberId) {
            throw new Error('Missing "senderPhoneNumberId".');
        }

        if (graphAPIVersion) {
            signale.warn(
                `Please note, the default "graphAPIVersion" is v13.0. You are using ${graphAPIVersion}. This may result in quirky behavior.`
            );
        }

        this.fetchAssistant = ({ url, method, headers, body }) => {
            return new Promise((resolve, reject) => {
                let defaultHeaders = () => {
                    let output = {
                        'Content-Type': 'application/json',
                        'Accept-Language': 'en_US',
                        Accept: 'application/json',
                    };
                    if (this.accessToken) {
                        output['Authorization'] = `Bearer ${this.accessToken}`;
                    }
                    return output;
                };
                let defaultBody = {};
                let defaultMethod = 'GET';

                if (!url) {
                    throw new Error('"url" is required in making a request');
                }

                if (!method) {
                    signale.warn(
                        `WARNING: "method" is missing. The default method will default to ${defaultMethod}. If this is not what you want, please specify the method.`
                    );
                }

                if (!headers) {
                    signale.warn(`WARNING: "headers" is missing.`);
                }

                if (method?.toUpperCase() === 'POST' && !body) {
                    signale.warn(
                        `WARNING: "body" is missing. The default body will default to ${JSON.stringify(
                            defaultBody
                        )}. If this is not what you want, please specify the body.`
                    );
                }

                method = method?.toUpperCase() || defaultMethod;
                headers = {
                    ...defaultHeaders(),
                    ...headers,
                };
                body = body || defaultBody;
                let fullUrl = `${this.baseUrl}${url}`;

                unirest(method, fullUrl)
                    .headers(headers)
                    .send(JSON.stringify(body))
                    .end(function (res) {
                        if (res.error) {
                            let errorObject = () => {
                                try {
                                    return (
                                        res.body?.error ||
                                        JSON.parse(res.raw_body)
                                    );
                                } catch (e) {
                                    return {
                                        error: res.raw_body,
                                    };
                                }
                            };
                            reject({
                                status: 'failed',
                                ...errorObject(),
                            });
                        } else {
                            resolve({
                                status: 'success',
                                data: res.body,
                            });
                        }
                    });
            });
        };
        this.mustHaveRecipientNumber = (recipientNumber) => {
            if (!recipientNumber) {
                throw new Error(
                    '"recipientNumber" is required in making a request'
                );
            }
        };
        this.mustHaveMessage = (message) => {
            if (!message) {
                throw new Error('"message" is required in making a request');
            }
        };
    }

    async createQRCodeMessage() {
        //   curl -X POST "https://graph.facebook.com/v14.0/{phone-number-ID}/
        //   ?prefilled_message={message-text}
        //   &generate_qr_image={image-format}
        //   &access_token={user-access-token}"

        this.mustHaveMessage(message);
        let response = await this.fetchAssistant({
            url: `/message_qrdls?access_token=${this.accessToken}&prefilled_message=${message}&generate_qr_image=png`,
            method: 'POST',
            body: {},
        });

        return response;
    }

    async PENDING_TESTS_sendText({ message, recipientNumber }) {
        let response = await this.fetchAssistant({
            url: '/messages',
            method: 'POST',
            body: {
                messaging_product: 'whatsapp',
                preview_url: false,
                recipient_type: 'individual',
                to: recipientNumber,
                type: 'text',
                text: {
                    body: message,
                },
            },
        });

        return response;
    }
    async sendText({ message, recipientNumber }) {
        this.mustHaveRecipientNumber(recipientNumber);
        this.mustHaveMessage(message);
        let response = await this.fetchAssistant({
            url: '/messages',
            method: 'POST',
            body: {
                messaging_product: 'whatsapp',
                to: recipientNumber,
                text: {
                    preview_url: true,
                    body: message,
                },
            },
        });

        return response;
    }

    async sendImage({ message, hostedImageUrl, recipientNumber }) {}

    async sendVideo({ message, hostedVideoUrl, recipientNumber }) {}

    async sendAudio({ message, recipientNumber }) {}

    async sendDocument({ message, recipientNumber }) {}

    async sendLocation({ message, recipientNumber }) {}

    async sendContact({ message, recipientNumber }) {
        this.mustHaveRecipientNumber(recipientNumber);
        this.mustHaveMessage(message);
        let response = await this.fetchAssistant({
            url: '/messages',
            method: 'POST',
            body: {
                messaging_product: 'whatsapp',
                to: recipientNumber,

                type: 'contacts',
                contacts: [],
            },
        });

        return response;
    }

    async sendSticker({ message, recipientNumber }) {}

    async sendChatAction({ action, recipientNumber }) {}

    async getUserProfile({ recipientNumber }) {}

    async getUserStatus({ recipientNumber }) {}

    async getUserProfilePicture({ recipientNumber }) {}

    async getUserStatusPicture({ recipientNumber }) {}

    parseMessage(requestBody) {
        return messageParser({ requestBody, currentWABA_ID: this.WABA_ID });
    }
}

/**
 * USAGE:
 *
 * const whatsapp = new WhatsappCloud();
 *
 * whatsapp.sendText({
 *     message: "Hello World",
 *    recipientNumber: "551198989898"
 * })
 * **/

module.exports = WhatsappCloud;
