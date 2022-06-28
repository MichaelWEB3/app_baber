import React, { useState, useEffect } from 'react'
import * as S from './styles'
import ExpandeIcon from '../../assets/expand.svg'
import NavPrevPrev from '../../assets/nav_prev.svg'
import NavNext from '../../assets/nav_next.svg'
export default function BaberModal({ setShowmodal, show, userInfo, service }) {

    function handlecloseButton() {
        setShowmodal(false)
    }

    const [ano, setano] = useState(0)
    const [mesSelect, setmes] = useState(0)
    const [dia, setdia] = useState(0)
    const [horas, sethoras] = useState(null)
    const [listadias, setlistadias] = useState([])
    const [listahoras, setlistahoras] = useState([])

    useEffect(() => {
        let hoje = new Date()
        setano(hoje.getFullYear())
        setmes(hoje.getMonth())
        setdia(hoje.getDate())
    }, [])

    useEffect(() => {
        if (userInfo.available) {
            let diasDomes = new Date(ano, mesSelect + 1, 0).getDate()
            let novalistadias = []
            for (let i = 1; i <= diasDomes; i++) {
                let d = new Date(ano, mesSelect, i)
                let anonovo = d.getFullYear()
                let mesnovo = d.getMonth() + 1
                let dianovo = d.getDate()
                mesnovo = mesnovo < 10 ? '0' + mesnovo : mesnovo
                dianovo = dianovo < 10 ? '0' + dianovo : dianovo
                let dataSeleci = anonovo + "-" + mesnovo + "-" + dia
                let valiacao = userInfo?.available?.filter(e => e.date === dataSeleci)
                novalistadias.push({
                    status: valiacao?.length ? true : false,
                    diaSemana: semana[d.getDay()],
                    numero: i
                })
            }
            setlistadias(novalistadias)
            setdia(1)
            sethoras([])
            setlistahoras(0)
        }

    }, [mesSelect, ano, userInfo])
    const mes = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ]
    const semana = [
        'Dom',
        'Segun',
        'Ter',
        'Qua',
        'Qui',
        'Sexta',
        'Sabado',
    ]

    function volatMes() {
        let montardata = new Date(ano, mesSelect, 1)
        montardata.setMonth(montardata.getMonth() - 1)
        setano(montardata.getFullYear())
        setmes(montardata.getMonth())
        setdia(1)
    }
    function avancarMes() {
        let montardata = new Date(ano, mesSelect, 1)
        montardata.setMonth(montardata.getMonth() + 1)
        setano(montardata.getFullYear())
        setmes(montardata.getMonth())
        setdia(1)
    }
    return (
        <S.Modal
            transparent={true}
            visible={show}
            animationType="slide"
        >
            <S.ModalArea>
                <S.ModalBOody>
                    <S.ExtiButton onPress={() => handlecloseButton()}>
                        <ExpandeIcon width="40" height="40" fill="#000" />
                    </S.ExtiButton>
                    <S.ModalITem>
                        <S.UserInfo>
                            <S.UserAvatar source={{ uri: userInfo?.avatar }}></S.UserAvatar>
                            <S.UserNaem>{userInfo?.name}</S.UserNaem>
                        </S.UserInfo>
                    </S.ModalITem>
                    <S.ModalITem>
                        {service != null &&
                            <S.SeriveItem >
                                <S.ServiceName>
                                    {userInfo.services[service].name}
                                </S.ServiceName>
                                <S.ServicePrice>
                                    R$ {userInfo.services[service].price}
                                </S.ServicePrice>
                            </S.SeriveItem>
                        }
                    </S.ModalITem>
                    <S.ModalITem>
                        <S.DateInfo>
                            <S.VoltaMEs onPress={() => volatMes()}>
                                <NavPrevPrev width="35" height="35" fill="#000" />
                            </S.VoltaMEs>
                            <S.Mes>{`${mes[mesSelect]} ${ano}`} </S.Mes>
                            <S.AvancarMes onPress={() => avancarMes()}>
                                <NavNext width="35" height="35" fill="#000" />
                            </S.AvancarMes>
                        </S.DateInfo>
                        <S.DateList horizontal={true} >
                            {listadias?.map((item, key) => {
                                return (
                                    <S.DataItem key={key}
                                        onPress={() => { }}>
                                        <S.DateItemDia>{item.diaSemana}</S.DateItemDia>
                                        <S.DateItemDiaName>{item.numero}</S.DateItemDiaName>
                                    </S.DataItem>
                                )

                            })}
                        </S.DateList>
                    </S.ModalITem>
                    <S.Finalizar>
                        <S.FinalizarText>
                            Finalizar Serviço
                        </S.FinalizarText>
                    </S.Finalizar>
                </S.ModalBOody>
            </S.ModalArea>
        </S.Modal >
    )
}