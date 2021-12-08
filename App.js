// App.js
import React from 'react';
import { AppRegistry, Text, View, SafeAreaView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SignUp } from "./pages/Signup"
import { Button, ThemeProvider, Input } from 'react-native-elements';

import SockJS from "sockjs-client";
import Stomp from "webstomp-client";

const styles = StyleSheet.create({
  parent: {
      width: 300,
      height: 500,
      backgroundColor: 'red',
      margin: 50,
      flex: 3
  },
  buttonLogin: {
      flexDirection: 'row', 
      height: 50, 
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
      elevation:3,
  },
  buttonSignUp: {
    flexDirection: 'row', 
    height: 50, 
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    elevation:3,
},
  text: {
      fontSize: 16,
      fontWeight: 'bold',
  },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
}
})

const inputTextStyle = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

const sendMessage = (msg) => {
    return fetch('http://192.168.1.57:8080/send', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            messageId: "1234",
            content: msg
        })
    });
}

let connected = false;
let socket ='';
let stompClient = null;

const connect = (text) => {
    socket = new SockJS("http://192.168.1.57:8080/gs-guide-websocket");
    stompClient = Stomp.over(socket);

    stompClient.connect({}, function(frame) {
        connected = true;
            stompClient.subscribe("/topic/greetings");
            stompClient.send("/app/hello", JSON.stringify({messageId: "286", content: text}));
    }, this.onError);
}

function LoginScreen({ navigation }) {
    const [text, onChangeText] = React.useState("Useless Text");
    return (
      <View>
      <ThemeProvider>
          <SafeAreaView>
            <Input style={{flex: 1}}
              placeholder="Enter your username"
              keyboardType="numeric"
            />

            <Input
              placeholder="Enter your password"
              keyboardType="numeric"
              secureTextEntry={true}
            />

            <TextInput
                style={inputTextStyle.input}
                onChangeText={onChangeText}
                value={text}
            />

              <TouchableOpacity
                  style = {styles.submitButton}
                  onPress = {
                      () => connect(text)
                  }>
                  <Text> Send </Text>
              </TouchableOpacity>

              <Text>

              </Text>

            </SafeAreaView>
            <View style={{
        width: 80, height: 40, backgroundColor: 'skyblue', margin: 40
      }}>
            <Text style={{flex: 2}}>Login Screen</Text>
            </View>
          
          <TouchableOpacity activeOpacity={0.20} style={styles.buttonLogin} onPress={() => navigation.navigate('Login-Validation')}>
                    <Text style={styles.text}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.20} style={styles.buttonSignUp} onPress={() => navigation.navigate('Sign-up')}>
                    <Text style={styles.text}>Sign-up</Text>
          </TouchableOpacity>
      </ThemeProvider>
      </View>
    );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign-up" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
