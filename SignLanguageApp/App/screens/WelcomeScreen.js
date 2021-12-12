import React from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
         style={styles.backGround}
         source={require('../assets/background.jpg')}
        >
            <Image style={styles.header} source={require('../assets/header.png')}/>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backGround: {
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    header:{
        width: '100%',
        height: 100,
        position: 'absolute',
        top:70,
    },
    loginButton:{
        width:'100%',
        height: 70,
        backgroundColor:"#000080",
    },
    registerButton:{
        width:'100%',
        height: 70,
        backgroundColor:"#008080",
    },
})

export default WelcomeScreen;