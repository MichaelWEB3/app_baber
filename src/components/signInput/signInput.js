import React from 'react'
import * as S from './styles'

export default function SignInput({ password, value, onChangeText, IconSvg, pleaceholder }) {
    return (
        <S.Container>
            <IconSvg width="24" heigth="24" fill="#268596" />
            <S.Input
                placeholder={pleaceholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </S.Container>
    )
}