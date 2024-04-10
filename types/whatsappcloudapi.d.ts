import {
    WhatsappCloudAPIConfig,
    WhatsappCloudAPIText,
    WhatsappCloudAPILocation,
    WhatsappCloudAPIDocument,
    WhatsappCloudAPISimpleButton,
    WhatsappCloudAPIRadioButton,
    WhatsappCloudAPIContact,
    WhatsappCloudAPIQrCodeMessage,
    WhatsappCloudAPIQrCodeResponse,
    WhatsappCloudAPIMarkAsRead
} from "./whatsappcloudapi.types";

declare module 'whatsappcloudapi_wrapper' {
    export default class WhatsappCloudAPI {
        constructor(config: WhatsappCloudAPIConfig);
        sendText(payload: WhatsappCloudAPIText): void;
        sendLocation(payload: WhatsappCloudAPILocation ): void;
        sendDocument(payload: WhatsappCloudAPIDocument): void;
        sendImage(payload: WhatsappCloudAPIDocument): void;
        sendVideo(payload: WhatsappCloudAPIDocument): void;
        sendAudio(payload: WhatsappCloudAPIDocument): void;
        sendSimpleButtons(payload: WhatsappCloudAPISimpleButton): void;
        sendRadioButtons(payload: WhatsappCloudAPIRadioButton): void;
        sendContact(payload: WhatsappCloudAPIContact): void;
        createQRCodeMessage(payload: WhatsappCloudAPIQrCodeMessage): WhatsappCloudAPIQrCodeResponse;
        markMessageAsRead(payload: WhatsappCloudAPIMarkAsRead): void;
    }
}
