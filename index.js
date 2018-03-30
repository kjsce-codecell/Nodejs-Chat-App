// @ js.do
'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

// creds
let token = ""

// allows us to process the data
app.set('port',(process.env.PORT || 5000));     // instead
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

// routes

app.get('/',function(req,res){
        res.send("Hi, this is Briefly!");
})

// Facebook
app.get('/webhook',function(req,res){
        if(req.query['hub.verify_token']=="anonymous_shit"){
                res.send(req.query['hub.challenge'])
        }
        res.send("Wrong Token")
})

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

app.listen(app.get('port'),function(){
        console.log("running :port")
})
