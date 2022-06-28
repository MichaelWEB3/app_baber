import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Preload from '../pages/preload/preload'
import SignIn from '../pages/signIn/signIn'
import SignUp from '../pages/signUp/signUp'
import MainTab from './maintab';
const Stack = createNativeStackNavigator();

export default function MainStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="MainTab" component={MainTab} />
        </Stack.Navigator>
    )
}