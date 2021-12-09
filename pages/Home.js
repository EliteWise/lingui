import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const styles = StyleSheet.create({
    chatButton: {
        backgroundColor: 'lightgray',
        height: 50,
        width: 50,
        flexDirection: 'row',
        marginTop: 30,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center'
},
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    }});

export function Home({ navigation }) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome to the Home Page !</Text>
            <Button title="Log Out" onPress={() => navigation.navigate("Login")} />
            <TouchableOpacity activeOpacity={0.20} style={styles.chatButton} onPress={() => navigation.navigate('Chat')}>
                <Text style={styles.text}>Mp</Text>
            </TouchableOpacity>
        </View>
    );
}