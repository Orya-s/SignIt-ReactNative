import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, View } from 'react-native';

import MainScreen from '../screens/MainScreen';
import LoginScreen from '../screens/LoginScreen';
import Alphabet from '../screens/Alphabet';
import LetterA from '../screens/AlphabetImages/LetterA'
import AddPay from '../screens/AddPay';
import Model from '../screens/Model';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    );
}

function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

const Drawer = createDrawerNavigator();

function AppDrawerNav() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} />
            {/* <Drawer.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="Home" component={MainScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="Alpha" component={Alphabet} options={{ headerShown: false }} />
            <Drawer.Screen name="A" component={LetterA} options={{ headerShown: false }} />
            <Drawer.Screen name="AddPay" component={AddPay} options={{ headerShown: false }} />
            <Drawer.Screen name="model" component={Model} options={{ headerShown: false }} /> */}
        </Drawer.Navigator>
    )
}

export default AppDrawerNav
