import React, {useEffect} from 'react';

import SockJS from "sockjs-client";
import Stomp from "webstomp-client";

let connected = false;
let socket ='';
let stompClient = null;

export const connect = (chatId, text) => {

    socket = new SockJS("http://192.168.1.57:8080/lingui-websocket");
    stompClient = Stomp.over(socket);

    stompClient.connect({}, function(frame) {
        connected = true;
        stompClient.subscribe("/broker", function(data) {
             let receivedMessage = JSON.parse(data.body).content;
        });
        stompClient.send("/lingui-api/message/" + chatId, JSON.stringify({messageId: "286", content: text}));
    }, this.onError);
}