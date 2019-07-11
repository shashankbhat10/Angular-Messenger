import * as io from 'socket.io-client';
import * as $ from 'jquery';

export class ChatService{
    private url = 'http://localhost:4000';
    private socket;

    constructor(){
        this.socket = io(this.url);
    }

    public sendMessage(message: string){
        this.socket.emit('new-message', message);
        const li = $('<li></li>');
        li.text(message);
        $('#msg').append(li);

        this.socket.on('new-bot-message', function(botMessage: string){
            console.log(botMessage);
            const li = $('<li></li>');
            li.text(botMessage);
            $('#msg').append(li);
        });
    }


}