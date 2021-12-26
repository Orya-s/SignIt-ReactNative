import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Platform, ScrollView, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, ImageBackground, View } from 'react-native'
import { db, auth } from '../../firebase'

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer']);

export const LoginScreen = () => {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   
   const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        user = userCredentials.user;
        console.log('Registered with:', user.email);

        // Once the user creation has happened successfully, we can add the 
        // currentUser into firestore with the appropriate details.
        
        db.collection('users').doc(auth.currentUser.uid)
        .set({
            email: email,
            password: password,
            payment: ''
        })
        .catch(error => {
            console.log('Something went wrong with added user to firestore: ', error);
        })
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"} >
    <ScrollView
      keyboardShouldPersistTaps={"handled"}
      style={{flex: 1,}}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1,}} >
    <ImageBackground
      style={styles.backGround}
      source={require('../assets/background.jpg')} >

      <Image style={styles.header} source={require('../assets/header.png')}/>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={[styles.input, styles.buttonOutline]}
          keyboardType='email-address'
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={[styles.input, styles.buttonOutline]}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}>

          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}>

          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
      
    </ImageBackground>
    </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  header:{
    flex: 1,
    justifyContent: 'flex-end',
    width: '90%',
    height: 100,
    position: 'absolute',
    top:65,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: Platform.OS === 'android' ? 18 : 30,
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
})

export default LoginScreen;
