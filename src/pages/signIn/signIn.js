import React, { useState, useContext } from 'react'
import * as S from './styles'
import { Text, TouchableOpacity } from 'react-native'
import BarbLogo from '../../assets/barber.svg'
import SignInput from '../../components/signInput/signInput'
import EmailIcon from '../../assets/email.svg'
import lock from '../../assets/lock.svg'
import Api from '../../api/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import useDados from '../../dates/datehook/userHook'

export default function SignIn({ navigation }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const date = useDados()

    async function handlerLogin() {
        if (email && senha) {
            const resp = await Api.signIn(email, senha)
            console.log(resp)
            await AsyncStorage.setItem('token', resp?.token)
            date?.setUser(resp.data)
            navigation.reset({
                routes: [{ name: 'MainTab' }]
            })
        }
    }
    function handlerCadastro() {
        navigation.navigate('SignUp')
    }
    return (
        <S.Container>
            <BarbLogo width="100%" height="160" />
            <S.InputArea>
                <SignInput
                    IconSvg={EmailIcon}
                    pleaceholder="Digite seu e-mail"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <SignInput
                    IconSvg={lock}
                    pleaceholder="Digite sua senha"
                    value={senha}
                    onChangeText={text => setSenha(text)}
                    password={true}
                />
                <S.CustomButton onPress={handlerLogin}>
                    <S.CustomButomText>Login</S.CustomButomText>
                </S.CustomButton>
            </S.InputArea>

            <S.MessengeButton onPress={handlerCadastro}>
                <S.MessengeButtonText>Ainda nao tem uma conta?</S.MessengeButtonText>
                <S.MessengeButtonTextBold>Cadastre-se</S.MessengeButtonTextBold>
            </S.MessengeButton>
        </S.Container>
    )
}