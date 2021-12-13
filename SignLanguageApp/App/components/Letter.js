import React, { useState } from 'react';
import { SafeAreaView, Button, Image, ImageBackground, StyleSheet, TouchableOpacity, TouchableHighlight, View, Text } from 'react-native';
import LetterA from '../screens/AlphabetImages/LetterA'

function Letter({ str, bcolor }) {
    const [show, setShow] = useState(false);
    return (

        <View style={{
            // position: 'absolute',
            width: '25%',
            height: 90,
            backgroundColor: `${bcolor}`,
        }}>
            <TouchableOpacity style={{ justifyContent: "center", alignItems: 'center' }} onPress={() => setShow(!show)}>
                <Text>{str}</Text>
            </TouchableOpacity>
            {
                show ? (
                    <TouchableOpacity onPress={() => setShow(!show)}>
                        <LetterA str={str} />
                    </TouchableOpacity>
                ) : null
            }
        </View>

    )
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
    Bbutton: {
        // position: 'absolute',
        width: '25%',
        height: 90,
        backgroundColor: "#7fffd4",
    },
    Cbutton: {
        width: '25%',
        height: 90,
        backgroundColor: "#ffe4c4",
    },
    Dbutton: {
        width: '25%',
        height: 90,
        backgroundColor: "#000000",
    },
    Ebutton: {
        width: '25%',
        height: 90,
        backgroundColor: "#000880",
    },
    Fbutton: {
        width: '25%',
        height: 90,
        backgroundColor: "#0000ff",
    },
    Gbutton: {
        width: '25%',
        height: 90,
        backgroundColor: "#8a2be2",
    },
    Hbutton: {
        width: '25%',
        height: 90,
        backgroundColor: "#a52a2a",
    },
    Ibutton: {
        width: '25%',
        height: 90,
        backgroundColor: "#5f9ea0",
    },
    Jbutton: {
        width: '25%',
        height: 90,
        backgroundColor: "#d2691e",
    },
    Kbutton: {
        width: '25%',
        height: 90,
        backgroundColor: "#6495ed",
    },
    Lbutton: {
        width: '25%',
        height: 90,
        backgroundColor: "#00008b",
    },
    Mbutton: {
        width: '25%',
        height: 90,
        backgroundColor: "#008b8b",
    },
    Nbutton: {
        width: '25%',
        height: 90,
        backgroundColor: "#bdb76b",
    },
    Obutton: {
        width: '25%',
        height: 90,
        backgroundColor: "#8b0000",
    },
    Pbutton: {
        width: '25%',
        height: 90,
        backgroundColor: "#483d8b",
    },
    Qbutton: {
        width: '25%',
        height: 90,
        backgroundColor: "#87ceeb",
    },
    Rbutton: {
        width: '25%',
        height: 90,
        backgroundColor: "#fa8072",
    },
    Sbutton: {
        width: '25%',
        height: 90,
        backgroundColor: "#b0e0e6",
    },
    Tbutton: {
        width: '25%',
        height: 90,
        backgroundColor: "#ffdead",
    },
    Ubutton: {
        width: '25%',
        height: 90,
        backgroundColor: "#66cdaa",
    },
    Vbutton: {
        width: '25%',
        height: 90,
        backgroundColor: "#ffd700",
    },
    Wbutton: {
        width: '25%',
        height: 90,
        backgroundColor: "#87cefa",
    },
    Xbutton: {
        width: '25%',
        height: 90,
        backgroundColor: "#ff00ff",
    },
    Ybutton: {
        width: '25%',
        height: 90,
        backgroundColor: "#b22222",
    },
    Zbutton: {
        width: '25%',
        height: 90,
        backgroundColor: "#daa520",
    },
})

export default Letter
