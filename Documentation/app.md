# Chat App Using Node JS


## Dependencies

#### 1. npm
npm, short for Node Package Manager, is two things: first and foremost, it is an online repository for the publishing of open-source Node.js projects; second, it is a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management. A plethora of node.js libraries and applications are published on npm, and many more are added every day.

#### 1. Node.js
Node.js is a JavaScript runtime that runs on top of Google’s open-source JavaScript engine called V8. Pairing JavaScript’s naturally event-driven, asynchronous coding style with non-blocking I/O libraries makes Node.js fast, lightweight, and efficient. You can install using following command.
```
sudo apt-get install nodejs
```

#### 2. BodyParser
This is a node.js middleware for handling JSON, Raw, Text and URL encoded form data. You can install using following command.
``` 
npm install body-parser
```
#### 3. Express
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is an open source framework developed and maintained by the Node.js foundation.
To install express
```
npm install express
```
#### 3. Request
The simplest way to create HTTP requests in Node.js is by using the request module. Request allows you to make all types of HTTP requests, including GET, POST, PUT, and DELETE. Its flexibility makes the request module ideal for interacting with RESTful APIs. You can install request using the following npm command.
```
npm install request
```

## Create Facebook Page and App

To create a Facebook bot, we need to two things:

1. A Facebook public page, that you’ll connect with your bot.
2. A Facebook Developer application, which will be connected to your webhook server and your public page, and work as a middleware between them.

First you need to create a page. Go to facebook.com/pages/create. Choose a category, subcategory and click Get Started.

After that you’ll need to create an app. Go to developers.facebook.com/quickstarts, give your Facebook app a name, type in your e-mail, and then click the “Create App ID” button.

After creating the App, you have to select a product. Click the“Messenger” icon and then click on the “Set Up” button. This will redirect you to the Messenger Platform.

Once you’re there, you must locate the “Token Generation” section. Select the page you already created, and it will give you a Page Access Token that we will use later.

Below this section is the Webhooks section. Click on “Setup Webhooks” and it will show you a popup window, where you’ll need to fill out the following:

1. Callback URL: 
2. Verify Token: The string for validation that you already chose from controller/verification.js.
3. Subscription Fields: Choose messages and messaging_postbacks. If you want to know more about webhook events read this information.



