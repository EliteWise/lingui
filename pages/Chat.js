import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React from "react";
import {connect} from "./Websocket";

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

export function Chat({ navigation }) {
    const [text, onChangeText] = React.useState("Useless Text");
    return(
      <View>
          <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Chat Page</Text>
              <Button title="Home Page" onPress={() => navigation.navigate("Home")} />

          </View>
          <TextInput
              style={inputTextStyle.input}
              onChangeText={onChangeText}
              value={text}
          />
          <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                  style = {inputTextStyle.submitButton}
                  onPress = {
                      () => connect(text)
                  }>
                  <Text> Send </Text>
              </TouchableOpacity>
          </View>

      </View>
    );
}