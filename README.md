# whatsappcloudapi_wrapper 🎉

<img src="https://img.shields.io/npm/v/whatsappcloudapi_wrapper"
    alt="Whatsapp Cloud API"/>

<img src="https://img.shields.io/npm/dw/whatsappcloudapi_wrapper"
    alt="Whatsapp Cloud API"/>
<br/>

The <b>easiest</b>, most intuitive way for <b>businesses</b> and <b>developers</b> to start building on the <b>Whatsapp Cloud API</b>.

😻 Send a free-formatted text message to a recipient

🗺 Send a Geo-location message to a recipient

📃 Send a document to a recipient

📷 Send an image to a recipient

🎞 Send a video to a recipient

🔉 Send an audio to a recipient

🔙 Send a list of buttons to the recipient (max number of buttons allowed are 3)

🛒 Send a list of radio buttons to a recipient (max number of radio buttons allowed are 10)

🤙🏾 Send a contact to a recipient

🔐 Generate a QR code which can be scanned by a recipient

📖 Mark a message as read

🎨🖌 Parse incoming messages

<img src="./static_files/379234-whatsapp-cloud-api.jpeg"
    alt="Whatsapp Cloud API"/>
<br/>

<!-- ![npm bundle size](https://img.shields.io/bundlephobia/min/whatsappcloudapi_wrapper) -->

### Frequently Asked Questions:

-   What is WhatsApp Cloud API? [Watch this 60seconds video](https://www.youtube.com/watch?v=LaHnC7emQNM) during the launch Whatsapp Cloud API.
-   What is this package? This package is an unofficial and _open-source_ NodeJS wrapper around the official [WhatsApp Cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api).
-   Why is this package useful? Because it allows you to use the WhatsApp Cloud API without having to write a lot of code.
-   Can I use this package in my project? Yes, you can use it however you want.
-   Can I contribute to this package? Yes, you can contribute to this package by creating a pull request.

### Installation:

-   To install this package in your project:
-   Using NPM:

```js
        npm install whatsappcloudapi_wrapper
```

-   Using Yarn:

```js
        yarn add whatsappcloudapi_wrapper
```

# Usage:

-   First import the package as follows:

```js
const WhatsappCloudAPI = require('whatsappcloudapi_wrapper');
```

-   Then initialize the class as follows:

```js
const Whatsapp = new WhatsappCloudAPI({
    accessToken: 'Your access token here',
    senderPhoneNumberId: 'Your sender phone number id here',
    WABA_ID: 'Your Whatsapp Business Account id here',
});
```

## Part 1: Outbound messages (From business to customers)

#### Send a free-formatted text message to a recipient:

```js
await Whatsapp.sendText({
    message: 'Hello world',
    recipientPhone: 'your recipient phone number here',
});
```

    > Quick Question:
    - How does a recipient phone number look like?

    > Quick Answer:
    - A recipient phone number is the international phone number of the recipient without the '+' prefix.
    - For example, where a Kenyan phone number is '+254712345678' we would send the message to a recipientPhone 254712345678.
    - For a phone number +15550253483 we would send the message to a recipientPhone 15550253483.
    - For an US phone number +1 555-555-5555 we would send the message to a recipientPhone 5555555555.

    Makes sense?

#### Send a Geo-location message to a recipient:

```js
await Whatsapp.sendLocation({
    recipientPhone: 'your recipient phone number here',
    latitude: 'your latitude here',
    longitude: 'your longitude here',
    name: 'your location name here',
    address: 'your location street/address here',
});
```

#### Send a document to a recipient:

```js
// Send a document that is hosted on a public URL
await Whatsapp.sendDocument({
    recipientPhone: 'your recipient phone number here',
    caption: 'Invoice #123.',
    url: 'http://pdfkit.org/demo/out.pdf',
});

//OR

// Send a document that is in your local filesystem (file will be uploaded to the WhatsApp server first before it is sent).
await Whatsapp.sendDocument({
    recipientPhone: 'your recipient phone number here',
    file_path: './output.pdf',
    caption: 'Invoice #123',
});
```

#### Send an image to a recipient

```js
// Send an image that is hosted on a public URL
await Whatsapp.sendImage({
    recipientPhone: 'your recipient phone number here',
    caption: 'Test',
    file_path: 'https://example.com/image.png',
});

// OR

// Send an image that is in your local filesystem (file will be uploaded to the WhatsApp server first before it is sent).
await Whatsapp.sendImage({
    recipientPhone: 'your recipient phone number here',
    caption: 'Test',
    file_path: './XEIDF3D5FTBDF1.png',
});
```

#### Send a video to a recipient

```js
// Send a video that is hosted on a public URL
await Whatsapp.sendVideo({
    recipientPhone: 'your recipient phone number here',
    caption: 'Test',
    url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4',
});

// OR

// Send a video that is in your local filesystem (file will be uploaded to the WhatsApp server first before it is sent).
await Whatsapp.sendVideo({
    recipientPhone: 'your recipient phone number here',
    caption: 'Test',
    file_path: './last.mp4',
});
```

#### Send an audio to a recipient

```js
// Send an audio that is hosted on a public URL
await Whatsapp.sendAudio({
    recipientPhone: 'your recipient phone number here',
    url: 'https://example.com/audio.mp3',
});

// OR

// Send an audio that is in your local filesystem (file will be uploaded to the WhatsApp server first before it is sent).
await Whatsapp.sendAudio({
    recipientPhone: 'your recipient phone number here',
    caption: 'Test',
    file_path: './last.mp3',
});
```

#### Send a list of simple buttons to the recipient (max number of buttons allowed are 3)

```js
await Whatsapp.sendSimpleButtons({
    recipientPhone: 'your recipient phone number here',
    message: `How may I help you today`,
    listOfButtons: [
        {
            title: 'See some products',
            id: 'see_categories',
        },
        {
            title: 'Send my invoice',
            id: 'print_invoice',
        },
        {
            title: 'Talk to a human',
            id: 'talk_to_human',
        },
    ],
});
```

#### Send a list of radio buttons to a recipient: (max number of radio buttons allowed are 10)

```js
await Whatsapp.sendRadioButtons({
    recipientPhone: 'your recipient phone number here',
    headerText: 'Black Friday Top 10 Products',
    bodyText:
        'Daggie has some great products lined up for you based on your previous shopping history.\nPlease select one of the products below.',
    footerText: 'Approved by Daggie Blanqx',
    listOfSections: [
        {
            title: 'Top 3 Fashion',
            rows: [
                {
                    title: 'Black LVX T-Shirt',
                    description: 'KES 2999.00\nLVX is a warm cotton t-shirt',
                    id: 'SKU12_black_lvx_tshirt',
                },
                {
                    title: 'Purple hoodie',
                    description:
                        'KES 1999.00\nPurple hoodie with a Logrocket logo',
                    id: 'SKU13_purple_hoodie',
                },
                {
                    title: 'Air Jordan 1',
                    description:
                        'KES 10999.00\nWe move where others do not.Wanna fly?',
                    id: 'SKU14_air_jordan_1',
                },
            ],
        },
        {
            title: 'Top 3 Gadgets',
            rows: [
                {
                    title: 'Apple Watch',
                    description:
                        'KES 75999.00\nTime is finite, enjoy every second of it',
                    id: 'SKU15_apple_watch',
                },
                {
                    title: 'Surface Pro',
                    description: `KES 59999.00\nDon't just surf the web, surf the world`,
                    id: 'SKU16_surface_pro',
                },
                {
                    title: 'Xiaomi Beats Speaker',
                    description: `KES 45699\nIt is in how your heartbeats, the way Xiaomi Beats.`,
                    id: 'SKU17_xiaomi_beats_speaker',
                },
            ],
        },
        {
            title: 'Top 3 Kitchen',
            rows: [
                {
                    title: 'Portable Hand Mixer',
                    description: `KES7899\nTempt thy sweetbuds by mixing your favorite food uniformly.`,
                    id: 'SKU18_portable_hand_mixer',
                },
                {
                    title: 'Non-stick waffle-maker',
                    description: `KES7899\nGreat Waffles are made with the best ingredients.`,
                    id: 'SKU19_non_stick_waffle_maker',
                },
                {
                    title: '6-set Cooking Spoons',
                    description: `KES7899\nHold thy happiness right.`,
                    id: 'SKU20_6_set_cooking_spoons',
                },
            ],
        },
        {
            title: '1 random pick',
            rows: [
                {
                    title: 'Nivea Icy Soap',
                    description: `KES899\nStay hydrated and refreshed. Nourish your skin.`,
                    id: 'SKU21_nivea_icy_soap',
                },
            ],
        },
    ],
});
```

#### Send a contact to a recipient:

```js
await Whatsapp.sendContact({
    recipientPhone: recipientPhone,
    contact_profile: {
        addresses: [
            {
                street: '1 Hacker Way',
                city: 'Menlo Park',
                state: 'CA',
                zip: '94025',
                country: 'United States',
                country_code: 'us',
                type: 'HOME',
            },
            {
                street: '200 Jefferson Dr',
                city: 'Menlo Park',
                state: 'CA',
                zip: '94025',
                country: 'United States',
                country_code: 'us',
                type: 'WORK',
            },
        ],
        birthday: '2002-02-14',
        emails: [
            {
                email: 'test@fb.com',
                type: 'WORK',
            },
            {
                email: 'test@whatsapp.com',
                type: 'HOME',
            },
        ],
        name: {
            formatted_name: 'Daggie Blanqx',
            first_name: 'Daggie',
            last_name: 'Blanqx',
            middle_name: 'M.',
            suffix: 'Sr',
            prefix: 'Sw Engr',
        },
        org: {
            company: 'WhatsApp',
            department: 'Design',
            title: 'Manager',
        },
        phones: [
            {
                phone: '+1 (940) 555-1234',
                type: 'HOME',
                wa_id: '16505551234', // optional
            },
            {
                phone: '+1 (650) 555-1234',
                type: 'WORK', // optional
                wa_id: '16505551234', // optional
            },
        ],
        urls: [
            {
                url: 'https://www.facebook.com',
                type: 'WORK',
            },
            {
                url: 'https://www.whatsapp.com',
                type: 'HOME',
            },
        ],
    },
});
```

##### Generate a QR code which can be scanned by a recipient:

```js
let result = await Whatsapp.createQRCodeMessage({
    message: `Your QR code message here. I am a message hidden in a QR code.`,
    imageType: 'png' || 'svg',
});

let urlOfImage = result.data.qr_image_url;
```

See the image below on how to display the QR code: <br/>
<img src="./static_files/XEIDF3D5FTBDF1.png"
    alt="Markdown Monster icon"
    style="height:250px;width:250px" />
<br/>

#### Mark a message as read:

```js
await Whatsapp.markMessageAsRead({
    message_id: 'the id of your message here',
});
// A non-retryable error will be thrown if the message is not found or a message that has already been read.
```

#### Limitations in outbound actions:

-   The button id must be between 1 and 256 characters long.
-   The button title must be between 1 and 20 characters long.
-   The list of items is limited to 10.
-   The description of items in list must be between 1 and 72 characters long.
-   The title of the list must be between 1 and 24 characters long.
-   The id of the list must be between 1 and 200 characters long.

## Part 2: Inbound messages (From customers to business)

#### Parse incoming messages:

```js
// req.body is the body of the request which ping the webhook. Invalid payloads will throw an error, and you should respond with HTTP status 5** or 4**, not 200.
// remember to respond with HTTP 200 status at the end of a succesful inbound request.
let data = Whatsapp.parseMessage(req.body);
/*
data.isMessage will be true if it is a message from a customer, it will be false otherwise.
data.isNotificationMessage will be true if it is a notification from a Meta(e.g a message delivery/read status notification), it will be false otherwise.
data will throw an error if the body of the webhook request is not valid or not from Meta.
*/
```

#### Handling a _SIMPLE_ button click

```js
if (data?.isMessage) {
    let incomingMessage = data.message;
    let recipientPhone = incomingMessage.from.phone; // extract the phone number of the customer
    let recipientName = incomingMessage.from.name; // extract the name of the customer
    let typeOfMsg = incomingMessage.type; // extract the type of message
    let message_id = incomingMessage.message_id; // extract the message id

    if (typeOfMsg === 'simple_button_message') {
        let button_id = incomingMessage.button_reply.id;
        if (button_id === 'book_appointment') {

            // The customer clicked on a simple button whose id is 'book_appointment'.
            // You can respond to them with an outbound action eg, a text message
            await Whatsapp.sendText({
                message: `Hello customer, You clicked on the 'book appointment' button`,
                recipientPhone: 'your recipient phone number here',
            });
        };
    };
```

#### Handling a _RADIO_ button selection

```js
if (data?.isMessage) {
    let incomingMessage = data.message;
    let recipientPhone = incomingMessage.from.phone; // extract the phone number of the customer
    let recipientName = incomingMessage.from.name; // extract the name of the customer
    let typeOfMsg = incomingMessage.type; // extract the type of message
    let message_id = incomingMessage.message_id; // extract the message id

    if (typeOfMsg === 'radio_button_message') {
        let selectionId = incomingMessage.list_reply.id;
        if (selectionId === 'morning_session') {
            // The customer selected the radio button whose id of 'morning_session'.
            // You can respond to them with an outbound action eg, a text message
            await Whatsapp.sendText({
                message: `You have selected the 'morning_session' option`,
                recipientPhone: 'your recipient phone number here'
            });
        };
    };
```

### Help information

-   If you have any questions, ask via the [GitHub Discussion forums](https://github.com/DaggieBlanqx/whatsappcloudapi_wrapper/discussions)
-   If you have any suggestions or feedback, please [open an issue](https://github.com/DaggieBlanqx/whatsappcloudapi_wrapper/issues) or [create a pull request](https://github.com/DaggieBlanqx/whatsappcloudapi_wrapper/pulls).

### Notes:

-   This package is in active development.
-   This means new features are added regularly.
-   Incase your favorite feature is missing, you can always bump a version backwards or [create a pull request](https://github.com/DaggieBlanqx/whatsappcloudapi_wrapper/pulls) which will be reviewed and merged into [the next release](https://github.com/DaggieBlanqx/whatsappcloudapi_wrapper/releases).
-   Thanks for your contribution.
-   Happy coding!

### Reach out:

-   Follow me on Twitter: [@daggieblanqx](https://twitter.com/daggieblanqx)
-   I am also on LinkedIn, where you can tag me to the awesome projects you've built using this package: [@daggieblanqx](https://www.linkedin.com/in/daggieblanqx/)
-   Blog posts: [Logrocket/@Daggieblanqx](https://blog.logrocket.com/author/daggieblanqx/)

```

```
