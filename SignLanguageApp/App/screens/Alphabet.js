import React from 'react';
import { useNavigation } from '@react-navigation/native'

import {Button, Image, ImageBackground, StyleSheet, TouchableOpacity, View, Text} from 'react-native';

function Alphabet(props) {
    const navigation = useNavigation()

    return (
        <ImageBackground style={styles.backGround}>
            {/* <View >
                <Button
                    style={styles.backButton}
                    title="Back to Menu"
                    onPress={() => {
                    navigation.replace("Home")
                    }}
                />
            </View> */}

            <View style={styles.Abutton}>
                <View style={styles.font}>
                    <Text>A</Text>
                </View>                
            </View>
            <View style={styles.Bbutton}></View>
            <View style={styles.Cbutton}></View>
            <View style={styles.Dbutton}></View>
            <View style={styles.Ebutton}></View>
            <View style={styles.Fbutton}></View>
            <View style={styles.Gbutton}></View>
            <View style={styles.Hbutton}></View>
            <View style={styles.Ibutton}></View>
            <View style={styles.Jbutton}></View>
            <View style={styles.Kbutton}></View>
            <View style={styles.Lbutton}></View>
            <View style={styles.Mbutton}></View>
            <View style={styles.Nbutton}></View>
            <View style={styles.Obutton}></View>
            <View style={styles.Pbutton}></View>
            <View style={styles.Qbutton}></View>
            <View style={styles.Rbutton}></View>
            <View style={styles.Sbutton}></View>
            <View style={styles.Tbutton}></View>
            <View style={styles.Ubutton}></View>
            <View style={styles.Vbutton}></View>
            <View style={styles.Wbutton}></View>
            <View style={styles.Xbutton}></View>
            <View style={styles.Ybutton}></View>
            <View style={styles.Zbutton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backGround:{
        flex:1,
        flexDirection:'row',
        backgroundColor:"#f8f8ff",
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        flexWrap:'wrap',
    },
    font:{
        flex:1,
        backgroundColor:'#ffffff',
        alignItems:'center',
        justifyContent:'center',
    },
    Abutton:{
        width:'25%',
        height: 90,
        backgroundColor:"#00ffff",
    },
    Bbutton:{
        width:'25%',
        height: 90,
        backgroundColor:"#7fffd4",
    },
    Cbutton:{
        width:'25%',
        height: 90,
        backgroundColor:"#ffe4c4",
    },
    Dbutton:{
        width:'25%',
        height: 90,
        backgroundColor:"#000000",
    },
    Ebutton:{
        width:'25%',
        height: 90,
        backgroundColor:"#000880",
    },
    Fbutton:{
        width:'25%',
        height: 90,
        backgroundColor:"#0000ff",
    },
    Gbutton:{
        width:'25%',
        height: 90,
        backgroundColor:"#8a2be2",
    },
    Hbutton:{
        width:'25%',
        height: 90,
        backgroundColor:"#a52a2a",
    },
    Ibutton:{
        width:'25%',
        height: 90,
        backgroundColor:"#5f9ea0",
    },
    Jbutton:{
        width:'25%',
        height: 90,
        backgroundColor:"#d2691e",
    },
    Kbutton:{
        width:'25%',
        height: 90,
        backgroundColor:"#6495ed",
    },
    Lbutton:{
        width:'25%',
        height: 90,
        backgroundColor:"#00008b",
    },
    Mbutton:{
        width:'25%',
        height: 90,
        backgroundColor:"#008b8b",
    },
    Nbutton:{
        width:'25%',
        height: 90,
        backgroundColor:"#bdb76b",
    },
    Obutton:{
        width:'25%',
        height: 90,
        backgroundColor:"#8b0000",
    },
    Pbutton:{
        width:'25%',
        height: 90,
        backgroundColor:"#483d8b",
    },
    Qbutton:{
        width:'25%',
        height: 90,
        backgroundColor:"#87ceeb",
    },
    Rbutton:{
        width:'25%',
        height: 90,
        backgroundColor:"#fa8072",
    },
    Sbutton:{
        width:'25%',
        height: 90,
        backgroundColor:"#b0e0e6",
    },
    Tbutton:{
        width:'25%',
        height: 90,
        backgroundColor:"#ffdead",
    },
    Ubutton:{
        width:'25%',
        height: 90,
        backgroundColor:"#66cdaa",
    },
    Vbutton:{
        width:'25%',
        height: 90,
        backgroundColor:"#ffd700",
    },
    Wbutton:{
        width:'25%',
        height: 90,
        backgroundColor:"#87cefa",
    },
    Xbutton:{
        width:'25%',
        height: 90,
        backgroundColor:"#ff00ff",
    },
    Ybutton:{
        width:'25%',
        height: 90,
        backgroundColor:"#b22222",
    },
    Zbutton:{
        width:'25%',
        height: 90,
        backgroundColor:"#daa520",
    },
})

export default Alphabet;