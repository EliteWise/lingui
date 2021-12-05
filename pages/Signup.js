import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux'
import { Button, AppRegistry, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';


export function SignUp({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button title="Go to Details... again" onPress={() => navigation.goBack()} />
        </View>
    );
}