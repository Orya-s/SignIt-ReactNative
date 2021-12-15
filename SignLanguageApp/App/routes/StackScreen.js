import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import MainScreen from '../screens/MainScreen';
import LoginScreen from '../screens/LoginScreen';
import Alphabet from '../screens/Alphabet';
import LetterA from '../screens/AlphabetImages/LetterA'
import AddPay from '../screens/AddPay';
// import SignInScreen from '../screens/SignInScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name="SignInScreen" component={SignInScreen} /> */}

        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Alpha" component={Alphabet} options={{ headerShown: false }}/>
        <Stack.Screen name="A" component={LetterA} />
        <Stack.Screen name="AddPay" component={AddPay} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}
export {MyStack};
//export default StackScreen;