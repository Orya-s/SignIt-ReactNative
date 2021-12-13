import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, ImageBackground, View, Button } from 'react-native'
import LoginScreen from './LoginScreen'
import { auth } from '../../firebase'


const AddPay = () => {

    const navigation = useNavigation()

    const updatePay = () => {
        payment = LoginScreen.payment
        auth.updateCurrentUser(LoginScreen.payment)
    }


    return(
        <ImageBackground
            style={styles.backGround}
            source={require('../assets/background.jpg')}
        >
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding">
        <View style={styles.backButton}>
                <Button
                    style={styles.textStyle}
                    title="Back to menu"
                    onPress={() => {
                    navigation.replace("Home")
                    }}
                    color='white'
                />
        </View>

        <View style={styles.inputContainer}>
        {/* <Text>Edit your email address: </Text>
        <TextInput
          placeholder={LoginScreen.arguments.email}
          value={LoginScreen.arguments.email}
          onChangeText={text => LoginScreen.arguments.setEmail(text)}
          style={[styles.input, styles.buttonOutline]}
        /> */}
        <Text>To become premium user </Text>
        <Text>Insert payment method: </Text>
        <TextInput
          placeholder="Credit Card Number"
          value={LoginScreen.payment}
          onChangeText={text => LoginScreen.setPayment(text)}
          style={[styles.input, styles.buttonOutline]}
          secureTextEntry
        />
        </View>

        <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={updatePay}
          style={styles.button}>

          <Text style={styles.buttonText}>Update Payment</Text>
        </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backGround: {
      flex:1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    header:{
      width: '90%',
      height: 100,
      position: 'absolute',
      top:75,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '100%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 45,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
    button: {
      backgroundColor: '#0782F9',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#0782F9',
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#0782F9',
      fontWeight: '700',
      fontSize: 16,
    },
    backButton: {
        width: '100%', 
        height: 60, 
        backgroundColor: '#FF0030', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    textStyle:{
        width: '100%', 
        height: 60, 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        fontSize:25,
        bottom: 0,
    },
  })

export default AddPay;