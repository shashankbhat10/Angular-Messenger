import * as express from 'express';
import * as http from 'http';
import * as https from 'https';
import * as WebSocket from 'ws';
import { AddressInfo } from 'net';
import * as uid from 'uid-safe';


import * as log4js from 'log4js';
log4js.configure("D:/websocket-node-express-master/server/config/log4j.json");

var logger = log4js.getLogger( "test-file-appender" );


// import * as request from 'request';
const querystring = require('querystring');
const Q = require("q");
const app = express();
//initialize a simple http server
const server = http.createServer(app);
//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });


interface ExtWebSocket extends WebSocket {
    isAlive: boolean;
}

export class Message {
    constructor(
        public content: string,
        public isBroadcast = false,
        public sender: string
    ) { }
}


function createMessage(content: string, isBroadcast = false, sender = 'NS'): string {
    return JSON.stringify(new Message(content, isBroadcast, sender));
}


wss.on('connection', (ws: WebSocket) => {

    logger.info('messgfsdfd');
    var uniqueID = uid.sync(18);
    console.log(uniqueID);

    console.log("User connected");
    const extWs = ws as ExtWebSocket;

    extWs.isAlive = true;

    ws.on('pong', () => {
        extWs.isAlive = true;
    });

    // Call for unique ID for session for Rasa


    //connection is up, let's add a simple simple event
    ws.on('message', (msg: string) => {

        const message = JSON.parse(msg) as Message;
        // console.log(`User Connected: ${message}`);
        setTimeout(() => {
            if (message.isBroadcast) {

                //send back the message to the other clients
                wss.clients
                    .forEach(client => {
                        if (client != ws) {
                            client.send(createMessage(message.content, true, message.sender));
                        }
                    });

            }


            testHttpPost(message.content, uniqueID).then(function(result: any){
                // message.content = result;
                // ws.send(createMessage(`You sent -> ${JSON.parse(result)}`, message.isBroadcast));
                ws.send(createMessage(`${result}`, message.isBroadcast));
            });
        }, 1000);
    });

    //send immediatly a feedback to the incoming connection    
    ws.send(createMessage('Hi there, I am a WebSocket server'));

    ws.on('error', (err) => {
        console.warn(`Client disconnected - reason: ${err}`);
    })
});


// function testHttpGet(){
//     var deferred = Q.defer();
//     var url = 'http://localhost:7000/testapi';
// 	// https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
//     http.get(url, (resp) => {
// 		let data = '';
// 		resp.on('data', (chunk) => {
// 			data += chunk;
// 		});
// 		resp.on('end', () => {
// 			deferred.resolve(data)
// 		});
// 	}).on("error", (err) => {
// 		console.log("Error: " + err.message);
// 		deferred.reject(err)
// 	});
// 	return deferred.promise;
// }


function testHttpPost(userMessage: string, uniqueID: string){
    var botMessage = '';

    const data = JSON.stringify({
        sender: uniqueID,
        message: userMessage
    });

    const options = {
        hostname: 'localhost',
        port: 5005,
        path: '/webhooks/rest/webhook',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(data)
        }
    }

    var deferred = Q.defer();
    // var url = 'http://localhost:7000/testapi';
    
    var postReq = http.request(options, function(res) {
        var str = '';
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            str += chunk;
        });
        
        res.on('end', function () {
            var obj = JSON.parse(str);
            // console.log(obj[0]['text']);
            botMessage = obj[0]['text'];
            console.log(botMessage)
            
            deferred.resolve(botMessage);
            // console.log(str);
            // console.log(`Response returned + ${str}`);
        });
    });
    
    postReq.on('error', function (err) {
        deferred.reject(err);
    });

    postReq.write(data);
    postReq.end();

    
	return deferred.promise;
}


// Function to reverse a given string
function reverseText(message: string){
    return message.replace(/reverse/i,'').split('').reverse().join('');
}

// Function to count number of characters in a string
function characterCount(message: string){
    return message.length;
}

// Greeting Message
function greeting(){
    var greetingMessage = ['Hello asdasd', 'Hi! asdasd', 'Hey ada '];
    var message: string = greetingMessage[Math.floor(Math.random() * greetingMessage.length)];;

    return message;
}



setInterval(() => {
    wss.clients.forEach((ws: WebSocket) => {

        const extWs = ws as ExtWebSocket;

        if (!extWs.isAlive) return ws.terminate();

        extWs.isAlive = false;
        ws.ping(null, undefined);
    });
}, 10000);

//start our server
server.listen(process.env.PORT || 8999, () => {
    const { port } = server.address() as AddressInfo;
    console.log(`Server started on port ${port} :)`);
});