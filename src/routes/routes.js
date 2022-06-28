import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainStack from '../stack/mainstack';

export default function Route() {
    return (
        <NavigationContainer>
            <MainStack></MainStack>
        </NavigationContainer>
    )
}