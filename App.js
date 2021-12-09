// App.js
import React from 'react';
import { AppRegistry, Text, View, SafeAreaView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SignUp } from "./pages/Signup";
import { Home } from "./pages/Home";
import { Chat } from "./pages/Chat";
import { Button, ThemeProvider, Input } from 'react-native-elements';
import { connect } from './pages/Websocket';

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
})

function LoginScreen({ navigation }) {
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

            </SafeAreaView>

          <TouchableOpacity activeOpacity={0.20} style={styles.buttonSignUp} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.text}>Connect</Text>
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
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
