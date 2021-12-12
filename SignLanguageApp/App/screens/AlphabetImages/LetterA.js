import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

function letterA(props) {
    return (
        <Image
        resizeMode='contain'
        style='Style.image'
        source={require('../../assets/a.png')}
        

        />
    );
}

const styles = StyleSheet.create({
    image: {
        position: 'absolute',
        width:'100%',
        height:'100%',
    },
});

export default letterA;