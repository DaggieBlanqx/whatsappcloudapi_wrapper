# whatsappcloudapi_wrapper

![npm](https://img.shields.io/npm/v/whatsappcloudapi_wrapper)

<!-- ![npm bundle size](https://img.shields.io/bundlephobia/min/whatsappcloudapi_wrapper) -->

![npm](https://img.shields.io/npm/dw/whatsappcloudapi_wrapper)

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

### Usage:

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

-   Send a free-formatted text message to a recipient:

    ```js
    Whatsapp.sendText({
        message: `Hello world`,
        recipientNumber: 'your recipient phone number here',
    });
    ```

-   Parse incoming messages:

    ```js
    Whatsapp.parseMessage(req.body);
    ```
