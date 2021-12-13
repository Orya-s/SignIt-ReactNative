import React, { useState } from 'react';
import { SafeAreaView, Button, Image, ImageBackground, StyleSheet, TouchableOpacity, TouchableHighlight, View, Text } from 'react-native';
import LetterA from './AlphabetImages/LetterA';
import Letter from '../components/Letter';

function Alphabet() {

    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const colors = ["#f8f8ff", "#ffffff", "#00ffff", "#7fffd4", "#ffe4c4", "#000880", "#0000ff", "#8a2be2", "#a52a2a", "#5f9ea0", "#d2691e", "#6495ed", "#00008b", "#008b8b", "#bdb76b", "#8b0000", "#483d8b", "#87ceeb", "#fa8072", "#b0e0e6", "#ffdead", "#66cdaa", "#ffd700", "#87cefa", "#ff00ff", "#b22222", "#daa520"]

    let itemList = [];

    for (let i = 0; i < alphabet.length; i++) {
        itemList.push(
            <Letter key={i} str={alphabet[i]} bcolor={colors[i]} />
        )
    }
    const [show, setShow] = useState(false);

    return (
        <>
            <ImageBackground style={styles.backGround}>
                {itemList}
            </ImageBackground>
        </>
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
    }
})


export default Alphabet;
