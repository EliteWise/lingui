import React from 'react';

import SockJS from "sockjs-client";
import Stomp from "webstomp-client";

let connected = false;
let socket ='';
let stompClient = null;

export const connect = (text) => {
    socket = new SockJS("http://192.168.1.57:8080/gs-guide-websocket");
    stompClient = Stomp.over(socket);

    stompClient.connect({}, function(frame) {
        connected = true;
        stompClient.subscribe("/topic/greetings");
        stompClient.send("/app/hello", JSON.stringify({messageId: "286", content: text}));
    }, this.onError);
}