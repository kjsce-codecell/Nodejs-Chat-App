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
## Create index.js file 
##### 1. Dependencies
```
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
```
##### 2. Creating an express app
```
const app = express()
app.set('port',(process.env.PORT || 5000));     // instead
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
```
##### 3. Index route
```
app.get('/',function(req,res){
        res.send("Hi, this is Briefly!");
})
```
##### 4. For Facebook Verification
```
app.get('/webhook',function(req,res){
        if(req.query['hub.verify_token']=="anonymous_shit"){
                res.send(req.query['hub.challenge'])
        }
        res.send("Wrong Token")
})
```
##### 5.  API endpoint to index.js to process messages.
```
app.post('/webhook/',function(req,res){
        let messaging_events = req.body.entry[0].messaging ;
        for(let i = 0;i < messaging_events.length;i++){
                let event = messaging_events[i] ;
                let sender_id = event.sender.id ;
                if(event.message && event.message.text){
                        let text = event.message.text ;
                        sendText(sender_id,"Text echo: " + text.substring(0,100)) ;

                }
        }
        res.sendStatus(200) ;
})
```
##### 6. Function to send messages
```
function sendText(sender_id,text){
        let messageData  = {text:text};
        request({
                url : "https://graph.facebook.com/v2.6/me/messages",
                qs : {access_tokon : token}
                method : "POST",
                json: {
                        recipient:{id:sender_id},
                        message : messageData
                }
        },function(error,response,body){
                if(error){
                        console.log("sending error") ;
                }
                else if(response.body.error){
                        console.log("response body error") ;
                }
        })
}
```
##### 7. Creates server here browsers can connect to using listen method provided by Express:
```
app.listen(app.get('port'),function(){
        console.log("running :port")
})
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

1. Callback URL
2. Verify Token
3. Subscription Fields 

Click “Verify and Save” button.






