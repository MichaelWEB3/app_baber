import React, { useState } from 'react'
import * as S from './styles'
import { Text, TouchableOpacity } from 'react-native'
import BarbLogo from '../../assets/barber.svg'
import SignInput from '../../components/signInput/signInput'
import EmailIcon from '../../assets/email.svg'
import lock from '../../assets/lock.svg'
import Person from '../../assets/person.svg'
import Api from '../../api/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import useDados from '../../dates/datehook/userHook'
export default function SignUp({ navigation }) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const date = useDados()
    async function handlerCadastro() {
        if (email && senha && nome) {
            const resp = await Api.signUp(nome, email, senha)
            await AsyncStorage.setItem('token', resp.token)
            date?.setUser(resp.data)
            navigation.navigate('MainTab')
        }
    }
    function flashLogin() {
        navigation.navigate('SignIn')
    }

    return (
        <S.Container>
            <BarbLogo width="100%" height="160" />
            <S.InputArea>
                <SignInput
                    IconSvg={Person}
                    pleaceholder="Digite seu Nome completo"
                    value={nome}
                    onChangeText={text => setNome(text)}
                />
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
                <S.CustomButton onPress={handlerCadastro}>
                    <S.CustomButomText>Cadastrar</S.CustomButomText>
                </S.CustomButton>
            </S.InputArea>

            <S.MessengeButton onPress={flashLogin}>
                <S.MessengeButtonText>Ja pussi  uma conta?</S.MessengeButtonText>
                <S.MessengeButtonTextBold>Faça Login</S.MessengeButtonTextBold>
            </S.MessengeButton>
        </S.Container>
    )
}