import React from 'react'
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview'
import { useNavigation } from '@react-navigation/native'

const Model = () => {

  const navigation = useNavigation()

  return (
    <>
      <WebView source={{ uri: 'https://matannagar.github.io/' }} style={{ height: "80%", width: "100%", resizeMode: 'cover', flex: 1 }}
        injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=width, initial-scale=0.5, maximum-scale=0.5, user-scalable=2.0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `}
        scalesPageToFit={false}
      />
      <View style={styles.backButton}>
        <TouchableOpacity
          onPress={() => {
            navigation.replace("Home")
          }}
        >
          <Text style={styles.backButtonText}> Back to Menu </Text>
        </TouchableOpacity>
      </View>

    </>
  )
}

const styles = StyleSheet.create({
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


export default Model;



