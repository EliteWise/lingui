import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React, {useEffect} from "react";
import {connect} from "./Websocket";
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";

const inputTextStyle = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
        width: 90,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

let connected = false;
let socket ='';
let stompClient = null;

export function Chat({ navigation }) {
    const [text, onChangeText] = React.useState("Useless Text");
    let [ wb_data, set_wb_data ] = React.useState("");

    const connect = (chatId, text) => {

        socket = new SockJS("http://192.168.1.57:8080/lingui-websocket");
        stompClient = Stomp.over(socket);

        stompClient.connect({}, function(frame) {
            connected = true;
            stompClient.subscribe("/broker", function(data) {
                let receivedMessage = JSON.parse(data.body).content;
                set_wb_data(receivedMessage);
            });
            stompClient.send("/lingui-api/message/" + chatId, JSON.stringify({messageId: "286", content: text}));
        }, this.onError);
    }

    return(
      <View>
          <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Chat Page</Text>
              <Button title="Home Page" onPress={() => navigation.navigate("Home")} />
          </View>
          <Text>
              Message: {wb_data}
          </Text>
          <TextInput
              style={inputTextStyle.input}
              onChangeText={onChangeText}
              value={text}
          />
          <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                  style = {inputTextStyle.submitButton}
                  onPress = {
                      () => connect("Chat-11", text)
                  }>
                  <Text> Send </Text>
              </TouchableOpacity>
          </View>

      </View>
    );
}