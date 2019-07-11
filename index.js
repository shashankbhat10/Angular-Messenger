let express = require('express');
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = process.env.PORT || 4000;

io.on('connection', function(socket){
    console.log('user connected');

    socket.on('new-message', function(message){
        console.log(message);
        var botMessage = "message from bot: " + message;
        // console.log(botMessage);
        socket.emit('new-bot-message', botMessage);
    });

    // socket.on('new-bot-message', function(message){
    //     console.log(message);
    // });

});

server.listen(port, function(){
    console.log(`started on port: ${port}`);
});