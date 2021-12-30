import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import LetterA from '../screens/AlphabetImages/LetterA'

function Letter({ str, bcolor }) {
    const [show, setShow] = useState(false);
    return (
        <View style={{
            width: '25%',
            height: 90,
            backgroundColor: `${bcolor}`,
        }}>
            <TouchableOpacity
                style={{ justifyContent: "center", alignItems: 'center' }}
                onPress={() => setShow(!show)}>

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

export default Letter
