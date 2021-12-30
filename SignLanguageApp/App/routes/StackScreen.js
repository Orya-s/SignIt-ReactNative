import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import MainScreen from '../screens/MainScreen';
import LoginScreen from '../screens/LoginScreen';
import Alphabet from '../screens/Alphabet';
import LetterA from '../screens/AlphabetImages/LetterA'
import AddPay from '../screens/AddPay';
import Model from '../screens/Model';


const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Login"
        component={LoginScreen}
        options={{ headerShown: false, gestureEnabled: false }} />
      <Stack.Screen name="Home" component={MainScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Alpha" component={Alphabet} options={{ headerShown: false }} />
      <Stack.Screen name="A" component={LetterA} options={{ headerShown: false }} />
      <Stack.Screen name="AddPay" component={AddPay} options={{ headerShown: false }} />
      <Stack.Screen name="model" component={Model} options={{ headerShown: false }} />
    </Stack.Navigator>

  );
}

export function AppDrawerNav() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home Screen"
          component={MyStack}
          options={{ headerShown: false }}
        />
        <Drawer.Screen name="Learn the Alphabet" component={Alphabet} options={{ headerShown: false }} />
        <Drawer.Screen name="Become Premium" component={AddPay} options={{ headerShown: false }} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export { MyStack };
