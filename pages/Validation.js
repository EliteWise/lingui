import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';

export const Login = () => {
    return (
        <View>
            <Text>Login Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'blue',
    },
})