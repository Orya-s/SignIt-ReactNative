import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Platform, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, ImageBackground, View, Button} from 'react-native'
import { auth } from '../../firebase'
 
function MainScreen() {
    const navigation = useNavigation()

    const lettersLibrary = () => {
        navigation.replace("Alpha")
    }

    return (
        <ImageBackground
         style={styles.backGround}
         source={require('../assets/background.jpg')}
        >
            <View style={styles.backButton}>
                <Button
                    style={styles.textStyle}
                    title="Sign Out"
                    onPress={() => {
                    auth.signOut()
                    navigation.replace("Login")
                    }}
                    color='white'
                />
            </View>
            <Image style={styles.header} source={require('../assets/header.png')}/>
            <View style={styles.buttonContainer1}>
                <TouchableOpacity
                    onPress={lettersLibrary}>
                    <Text style={styles.buttonText}>Learn Sign Language</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer2}>
                <TouchableOpacity
                    //icon="camera"
                    //onPress={lettersLibrary}
                    >
                    <Text style={styles.buttonText}>Test yourself</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer3}>
                <TouchableOpacity
                    //onPress={lettersLibrary}
                    >
                    <Text style={styles.buttonText}>?</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backGround: {
        flex:1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    header:{
        width: '100%',
        height: 100,
        position: 'absolute',
        top:40,
    },
    buttonContainer1: {
        width: '33%',
        justifyContent: 'center',
        alignItems: 'center',
        //marginTop: 40,
        height: 70,
        bottom:40,
        backgroundColor:"#400060",
        fontWeight: 'bold',
        padding: 5,
        borderRadius: 10
    },
    buttonContainer2: {
        width: '34%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        height: 70,
        bottom:40,
        backgroundColor:"#004080",
        fontWeight: 'bold',
        padding: 5,
        borderRadius: 10
    },
    buttonContainer3: {
        width: '34%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
        height: 70,
        bottom:40,
        backgroundColor:"#000070",
        fontWeight: 'bold',
        padding: 5,
        borderRadius: 10
    },
    buttonText: {
        color: 'white',
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

export default MainScreen;