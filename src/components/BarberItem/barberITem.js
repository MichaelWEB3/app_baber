import React, { useState, useContext } from 'react'
import * as S from './styles'
import Stars from '../stars/stars'
import { useNavigation } from '@react-navigation/native'
export default function BarberITem({ data }) {
    const navigation = useNavigation()
    
    function handleClick() {
        navigation.navigate('Barber', {
            id: data.id,
            avatar: data.avatar,
            star: data?.stars,
            name: data.name
        })
    }

    return (
        <S.Area onPress={handleClick}>
            <S.Avatar source={{ uri: data?.avatar }} />
            <S.InfoArea>
                <S.Nome>{data?.name}</S.Nome>
                <Stars stars={data?.stars} showNumber={true} />
                <S.VisitButton>
                    <S.VisitText>Ver perfil</S.VisitText>
                </S.VisitButton>
            </S.InfoArea>
        </S.Area>
    )
}