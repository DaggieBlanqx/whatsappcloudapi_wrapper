import {z} from "zod";

export const TextSchema = z.object({
    message: z.string({required_error: "Message is required"}),
    recipientPhone: z.string().min(13, "Invalid Phone number")
});
export type WhatsappCloudAPIText = z.infer<typeof TextSchema>;

export const LocationSchema = z.object({
    recipientPhone: z.string().min(13, "Invalid Phone number"),
    name: z.string({required_error: "Location name is required"}),
    latitude: z.number().gte(-90).lte(90),
    longitude: z.number().gte(-180).lte(180),
    address: z.string({required_error: "Address is required"})
});
export type WhatsappCloudAPILocation = z.infer<typeof LocationSchema>;

export const DocumentSchema = z.object({
    recipientPhone: z.string().min(13, "Invalid Phone number"),
    caption: z.string().optional(),
    url: z.string().optional(),
    file_path: z.string().optional(),
});
export type WhatsappCloudAPIDocument = z.infer<typeof DocumentSchema>;

export const ListOfButtonSchema = z.object({
    title: z.string(),
    id: z.string(),
});
export type WhatsappCloudAPIListOfButton = z.infer<typeof ListOfButtonSchema>;

export const SimpleButtonSchema = z.object({
    recipientPhone: z.string().min(13, "Invalid Phone number"),
    message: z.string(),
    listOfButtons: z.array(ListOfButtonSchema),
});
export type WhatsappCloudAPISimpleButton = z.infer<typeof SimpleButtonSchema>;


export const RowSchema = z.object({
    title: z.string(),
    description: z.string(),
    id: z.string(),
});
export type WhatsappCloudAPIRow = z.infer<typeof RowSchema>;

export const ListOfSectionSchema = z.object({
    title: z.string(),
    rows: z.array(RowSchema),
});
export type WhatsappCloudAPIListOfSection = z.infer<typeof ListOfSectionSchema>;

export const RadioButtonSchema = z.object({
    recipientPhone: z.string().min(13, "Invalid Phone number"),
    headerText: z.string(),
    bodyText: z.string(),
    footerText: z.string(),
    listOfSections: z.array(ListOfSectionSchema),
});
export type WhatsappCloudAPIRadioButton = z.infer<typeof RadioButtonSchema>;




export const UrlSchema = z.object({
    url: z.string(),
    type: z.string(),
});
export type WhatsappCloudAPIUrl = z.infer<typeof UrlSchema>;

export const PhoneSchema = z.object({
    phone: z.string(),
    type: z.string(),
    wa_id: z.string(),
});
export type WhatsappCloudAPIPhone = z.infer<typeof PhoneSchema>;

export const OrgSchema = z.object({
    company: z.string(),
    department: z.string(),
    title: z.string(),
});
export type WhatsappCloudAPIOrg = z.infer<typeof OrgSchema>;

export const NameSchema = z.object({
    formatted_name: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    middle_name: z.string(),
    suffix: z.string(),
    prefix: z.string(),
});
export type WhatsappCloudAPIName = z.infer<typeof NameSchema>;

export const EmailSchema = z.object({
    email: z.string(),
    type: z.string(),
});
export type WhatsappCloudAPIEmail = z.infer<typeof EmailSchema>;

export const AddressSchema = z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
    country: z.string(),
    country_code: z.string(),
    type: z.string(),
});
export type WhatsappCloudAPIAddress = z.infer<typeof AddressSchema>;

export const ContactProfileSchema = z.object({
    addresses: z.array(AddressSchema),
    birthday: z.string(),
    emails: z.array(EmailSchema),
    name: NameSchema,
    org: OrgSchema,
    phones: z.array(PhoneSchema),
    urls: z.array(UrlSchema),
});
export type WhatsappCloudAPIContactProfile = z.infer<typeof ContactProfileSchema>;

export const ContactSchema = z.object({
    recipientPhone: z.string().min(13, "Invalid Phone number"),
    contact_profile: ContactProfileSchema,
});
export type WhatsappCloudAPIContact = z.infer<typeof ContactSchema>;


export const QrCodeMessageSchema = z.object({
    message: z.string(),
    imageType: z.string(),
});
export type WhatsappCloudAPIQrCodeMessage = z.infer<typeof QrCodeMessageSchema>;

export const DataSchema = z.object({
    qr_image_url: z.string(),
});
export type WhatsappCloudAPIData = z.infer<typeof DataSchema>;

export const QrCodeResponseSchema = z.object({
    data: DataSchema,
});
export type WhatsappCloudAPIQrCodeResponse = z.infer<typeof QrCodeResponseSchema>;


export const MarkAsReadSchema = z.object({
    message_id: z.string(),
});
export type WhatsappCloudAPIMarkAsRead = z.infer<typeof MarkAsReadSchema>;



export type WhatsappCloudAPIConfig = {
    accessToken: string,
    senderPhoneNumberId: string,
    WABA_ID: string
}