# whatsappcloudapi_wrapper

### Please note: This package is an unofficial NodeJS wrapper around the official WhatsApp Cloud API.


### Frequently Asked Questions:
- What is WhatsApp Cloud API?  [Watch this 60seconds video](https://www.youtube.com/watch?v=LaHnC7emQNM) where Meta Platform launches the Whatsapp Cloud API.
- Why is this package useful? Because it allows you to use the WhatsApp Cloud API without having to write a lot of code.
- Can I use this package in my project? Yes, you can use it however you want.
- Can I contribute to this package? Yes, you can contribute to this package by creating a pull request.

### Installation:

- To install this package in your project, run 
    ```js 
        npm install whatsappcloudapi_wrapper
    ```

### Usage:

- First import the package initialize the class as follows:
    ```js
    const WhatsappCloudAPI = require('whatsappcloudapi_wrapper');
    const whatsapp = new WhatsappCloudAPI({
        accessToken: 'Your access token here',
        senderPhoneNumberId: 'Your sender phone number id here',	
    });
    ```


- Send a free-formatted text message to a recipient:
    ```js    
    whatsapp.sendText({
        message: `Hello world`,
        recipientNumber: 'your recipient phone number here'
    });

    ```

    