import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ScrollView, undefined, Alert, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, ImageBackground, View } from 'react-native'
import { db, auth } from '../../firebase'


const AddPay = () => {

  const navigation = useNavigation()
  const currentUser = auth.currentUser;
  const [pay, setPayment] = useState('')

  const updatePay = () => {
    if (pay === '' || pay === undefined) {
      alert('To become a premium user please enter a payment method')
      Keyboard.dismiss()
    }
    else if (pay.length < 8 || pay.length > 19) {
      alert('Please enter a valid credit card number')
      Keyboard.dismiss()
    }
    else {
      const e = currentUser.email
      db.collection('users').doc(currentUser.uid).update({
        email: e,
        payment: pay
      })
      console.log("Payment added successfully");
      Alert.alert("", "Payment added successfully")
      navigation.goBack()
    }
  }


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"} >
      <ScrollView
        keyboardShouldPersistTaps={"handled"}
        style={{ flex: 1, }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, }} >
        <ImageBackground
          style={styles.backGround}
          backgroundColor={'#d9d9d9'} >

          <View style={styles.titleView}>
            <Text style={[styles.title, styles.textShadow]} >
              Become a{'\n'}Premium{'\n'}User
            </Text>
          </View>

          <View style={styles.backButton}>
            <TouchableOpacity
              onPress={() => {
                navigation.replace("Home")
              }} >
              <Text style={styles.backButtonText}> Back To Menu </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.secondTitle}>
              Want to get the complete learning experience?
            </Text>

            <Text style={styles.mainText} >
              For only $5 a month,{'\n'}
              Join our premium users and test your signing skills!{'\n'}
              Once you add a payment below,{'\n'}The 'Test Yourself' option will be
              open for you.{'\n'}
            </Text>

            <TextInput
              placeholder="Credit Card Number"
              value={pay}
              onChangeText={text => setPayment(text)}
              style={[styles.input, styles.TextBoxOutline]}
              secureTextEntry
              keyboardType='number-pad' />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={updatePay}
              style={styles.button} >
              <Text style={styles.buttonText}>Update Payment</Text>
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
  titleView: {
    marginTop: Platform.OS === 'android' ? 30 : 90,
    flex: 1,
    justifyContent: 'flex-end',
    flexShrink: 1,
    position: 'absolute',
  },
  title: {
    fontWeight: 'bold',
    height: Platform.OS === 'android' ? 650 : 820
  },
  textShadow: {
    fontSize: Platform.OS === 'android' ? 50 : 65,
    color: '#FFFFFF',
    fontFamily: Platform.OS === 'android' ? 'serif' : 'Times New Roman',
    paddingLeft: 20,
    paddingRight: 20,
    textShadowColor: '#606060',
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  inputContainer: {
    width: '80%'
  },
  secondTitle: {
    fontSize: 25,
    alignContent: 'center',
    fontWeight: '700',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: 'normal',
    alignContent: 'center'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 45,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? 10 : 45,
    marginBottom: 100
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: -20,
    marginTop: Platform.OS === 'android' ? 2 : -30,
  },
  TextBoxOutline: {
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
  backButton: {
    width: '100%',
    height: 60,
    backgroundColor: '#000030',
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
  textStyle: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    fontSize: 25,
    bottom: 0,
  },

})

export default AddPay;
