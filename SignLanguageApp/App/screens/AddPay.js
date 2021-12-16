import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { undefined, Alert, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, ImageBackground, View, Button } from 'react-native'
import { db, auth } from '../../firebase'


const AddPay = () => {

    const navigation = useNavigation()
    const currentUser = auth.currentUser;
    const [pay, setPayment] = useState('')

    const updatePay = () => {
        if(pay === '' || pay === undefined) {
          alert('To become a premium user please enter a payment method')
          Keyboard.dismiss()
        }
        else {
          const e = currentUser.email 
          db.collection('users').doc(currentUser.uid).update({
            email: e,
            payment:'1'
          }) 
          console.log("Payment added successfully");
          Alert.alert("", "Payment added successfully")
          navigation.replace("Home")
        }
    }


    return(
        <ImageBackground
          style={styles.backGround}
          source={require('../assets/background.jpg')}
        >
          <View > 
              <Text style=
              {[{marginTop:Platform.OS === 'android' ? 25 : 85, 
                fontSize: 25, 
                fontWeight: 'bold', 
                position: 'absolute',
                flexShrink: 1,
                marginLeft: -200,
                
              }
                , styles.textshadow]} >
                Edit Your {'\n'}Profile
              </Text>
            </View>
          <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}>

            {/* <View > 
              <Text style=
              {[{marginTop:Platform.OS === 'android' ? -190 : -250, 
                fontSize: 25, 
                fontWeight: 'bold', }
                , styles.textshadow]} >
                Edit Your Profile
              </Text>
            </View> */}
            <View style={styles.backButton}>
              <TouchableOpacity
                    onPress={() => {
                    navigation.replace("Home")
                    }} > 
                <Text style={styles.backButtonText}> Back To Menu </Text>
              </TouchableOpacity>
            </View>

        <View style={styles.inputContainer}>
        {/* <Text>Edit your email address: </Text>
        <TextInput
          placeholder={LoginScreen.arguments.email}
          value={LoginScreen.arguments.email}
          onChangeText={text => LoginScreen.arguments.setEmail(text)}
          style={[styles.input, styles.buttonOutline]}
        /> */}
        <Text style=
          {{marginTop: 80, 
            fontSize: 20, 
            fontWeight: 'normal', 
            alignContent:'center'}} >
              To become premium user Insert payment method: 
        </Text>
        {/* <Text style={{marginTop: 1, fontSize: 20, fontWeight: 'bold'}}>Insert payment method: </Text> */}
        <TextInput
          placeholder="Credit Card Number"
          value={pay}
          onChangeText={text => setPayment(text)}
          style={[styles.input, styles.buttonOutline]}
          secureTextEntry
          keyboardType= 'number-pad'
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
      width: '80%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 45,
      paddingVertical: 15,
      borderRadius: 10,
      marginTop: 5,
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      
    },
    button: {
      backgroundColor: '#0782F9',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginBottom:-50
    },
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 10,
      borderColor: '#0782F9',
      borderWidth: 2,
      //marginBottom: 10
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
    backButtonText: {
      color: 'white',
      fontWeight: '600',
      fontSize: 20,
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
    textshadow:{
      fontSize:70,
      color:'#FFFFFF',
      fontFamily: Platform.OS === 'android' ? 'serif' : 'Times New Roman',
      paddingLeft:30,
      paddingRight:30,
      textShadowColor:'#606060',
      textShadowOffset:{width: 5, height: 5},
      textShadowRadius:10,
    },
  })

export default AddPay;