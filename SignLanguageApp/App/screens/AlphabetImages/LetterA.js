import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

function LetterA(props) {
    return (
        <Image
            resizeMode='contain'
            style={styles.image}
            source={require('../../assets/a.png')}
        />
    );
}

const styles = StyleSheet.create({
    image: {
        position: 'absolute',
        resizeMode: "contain",
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LetterA;
