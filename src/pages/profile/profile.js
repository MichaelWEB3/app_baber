import React, { useState } from 'react'
import { Button } from 'react-native'
import * as S from './styles'
import Api from '../../api/api'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Profile() {
    const navigation = useNavigation()

    async function handlLogout() {
        navigation.reset({
            routes: [{ name: 'SignIn' }]
        })
        AsyncStorage.removeItem('token')
    }
    return (
        <>
            <S.Container>
                <S.TItle>Profile</S.TItle>
                <Button title='Sair' onPress={handlLogout} />
            </S.Container>
        </>
    )
}