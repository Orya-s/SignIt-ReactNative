import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { images } from '../AlphabetImages/images';

function LetterA({ str }) {
    var source_path = images[str.toLowerCase()].uri;
    // const data = require(`../../assets/${str}.png`);
    return (
        <Image
            resizeMode='contain'
            style={styles.image}
            // source={require(`../../assets/${str}.png`)}
            source={source_path}
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
