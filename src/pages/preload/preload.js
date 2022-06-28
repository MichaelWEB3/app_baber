import React, { useEffect, useState, useContext } from "react";
import * as S from './styles'
import { Text } from 'react-native'
import BarbLogo from '../../assets/barber.svg'
import AsyncStorage from "@react-native-async-storage/async-storage";
import Api from '../../api/api'
import useDados from '../../dates/datehook/userHook'

export default function Preload({ navigation }) {
    const date = useDados()


    useEffect(() => {
        const checkToke = async () => {
            const token = await AsyncStorage.getItem('token')
            if (token) {
                const resp = await Api.checkToken(token)
                if (resp) {
                    await AsyncStorage.setItem('token', resp?.token)
                    date?.setUser(resp.data)
                    navigation.reset({
                        routes: [{ name: 'MainTab' }]
                    })

                } else {
                    navigation.reset({
                        routes: [{ name: 'SignIn' }]
                    })
                }
            } else {
                navigation.navigate('SignIn')
            }
        }
        checkToke()
    }, [])

    return (
        <S.Container>
            <BarbLogo width="100%" height="160" />
            <S.LoadingIcon size="large" color="#FFF"></S.LoadingIcon>
        </S.Container>
    )
}