import React, { useState } from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Letter from '../components/Letter';
import { useNavigation } from '@react-navigation/native'

function Alphabet() {

    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const colors = ["#f8f8ff", "#ffffff", "#00ffff", "#7fffd4", "#ffe4c4", "#000880", "#0000ff", "#8a2be2", "#a52a2a", "#5f9ea0", "#d2691e", "#6495ed", "#00008b", "#008b8b", "#bdb76b", "#8b0000", "#483d8b", "#87ceeb", "#fa8072", "#b0e0e6", "#ffdead", "#66cdaa", "#ffd700", "#87cefa", "#ff00ff", "#b22222", "#daa520"]

    let itemList = [];

    for (let i = 0; i < alphabet.length; i++) {
        itemList.push(
            <Letter key={i} str={alphabet[i]} bcolor={colors[i]} />
        )
    }

    const navigation = useNavigation()

    return (
        <ImageBackground style={styles.backGround}>
            <View style={styles.backButton}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.replace("Home")
                    }}
                >
                    <Text style={styles.backButtonText}> Back to Menu </Text>
                </TouchableOpacity>
            </View>
            {itemList}
        </ImageBackground>
    );
}



const styles = StyleSheet.create({
    backGround: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "#f8f8ff",
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
    },
    font: {
        position: 'absolute',
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Abutton: {
        // position: 'absolute',
        width: '25%',
        height: 90,
        backgroundColor: "#00ffff",
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
        padding: '100%'
    }
})


export default Alphabet;
