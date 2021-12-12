import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import MainScreen from '../screens/MainScreen';
import LoginScreen from '../screens/LoginScreen';
import Alphabet from '../screens/Alphabet';
import LetterA from '../screens/AlphabetImages/LetterA'

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Alpha" component={Alphabet} />
        <Stack.Screen name="A" component={LetterA} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
export {MyStack};
//export default StackScreen;