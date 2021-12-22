import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { undefined, Alert, Image, StyleSheet, Text, TouchableOpacity, ImageBackground, View, Button} from 'react-native'
import { db, auth } from '../../firebase'
import Icon from 'react-native-vector-icons/FontAwesome'
import { HeaderBackground } from 'react-navigation-stack'

 
function MainScreen() {
    const navigation = useNavigation()
    const [userData, setUserData] = useState(null);


    const lettersLibrary = () => {
        navigation.replace("Alpha")
    }

    const addPayment = () => {
        navigation.replace("AddPay")
    }


    const getUser = async() => { 
        await db
        .collection('users')
        .doc(auth.currentUser.uid)
        .get()
        .then(documentSnapshot => {
            if( documentSnapshot.exists ) {
                // console.log('User Data', documentSnapshot.data());
                setUserData(documentSnapshot.data());
            }
            else alert("couldn't find user in db")
            })
        .catch(error => {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            throw error;
        });
    }

    const toModel = () => {
        if (userData !== null){
            const pay = userData.payment
            if (pay === undefined || pay === "") {
                Alert.alert('This option is saved for premium users','To become a premium user enter a payment method in the "Become Premium" page')
            }
            else {//if (pay === '/users/1' || pay === '1'){
                // Alert.alert("", "Open Model")
                navigation.navigate("model")
            }
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <ImageBackground
         style={styles.backGround}
         source={require('../assets/background.jpg')} >
            <View style={styles.backButton}>
                <TouchableOpacity
                    onPress={() => {
                    auth.signOut()
                    navigation.replace("Login")
                    }}
                > 
                <Text style={styles.backButtonText}> Sign Out </Text>
                </TouchableOpacity>
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
                    onPress={toModel} >
                    <Icon name='camera' color={'white'} size={12} marginTop={3}/>
                    <Text style={styles.buttonText}>Test Yourself</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.buttonContainer3}>
                <TouchableOpacity
                    onPress={addPayment} >
                    <Text style={styles.buttonText}>Become Premium</Text>
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
        top:55,
    },
    buttonContainer1: {
        width: '33%',
        justifyContent: 'center',
        alignItems: 'center',
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
    backButtonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 23,
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