import React, { useState, useContext } from 'react'
import * as S from './styles'
import { Text, TouchableOpacity } from 'react-native'
import HomeIcon from '../../assets/home.svg'
import SearchIcon from '../../assets/search.svg'
import TodayIcon from '../../assets/today.svg'
import FavoritICon from '../../assets/favorite.svg'
import AccoutICon from '../../assets/account.svg'
import useDados from '../../dates/datehook/userHook'
export default function CutomTabBar({ state, navigation }) {

    const [active, setActive] = useState(false)
    const date = useDados()
    const goTo = (screemName, select) => {
        navigation.navigate(screemName)
        if (select == state.index) {
            setActive(screemName)
        }
    }
    return (
        <S.TabArea>
            <S.TabItem onPress={() => goTo('Home', state.index)}>
                <HomeIcon style={{ opacity: active == 'Home' ? 1 : 0.5 }} widthe="24" heigth="24" fill="#FFF" />
            </S.TabItem>

            <S.TabItem onPress={() => goTo('Search', state.index)}>
                <SearchIcon style={{ opacity: active == 'Search' ? 1 : 0.5 }} widthe="24" heigth="24" fill="#FFF" />
            </S.TabItem>

            <S.TabItemCenter onPress={() => goTo('Appointments', state.index)}>
                <TodayIcon style={{ opacity: active == 'Appointments' ? 1 : 0.5 }} widthe="24" heigth="24" fill="#4EADBE" />
            </S.TabItemCenter>

            <S.TabItem onPress={() => goTo('Favorits', state.index)}>
                <FavoritICon style={{ opacity: active == 'Favorits' ? 1 : 0.5 }} widthe="24" heigth="24" fill="#FFF" />
            </S.TabItem>

            <S.TabItem onPress={() => goTo('Profile', state.index)}>
                {date?.user?.avatar ? <S.AvatarIcon source={{ uri: date?.user?.avatar  }} /> : <AccoutICon style={{ opacity: active == 'Profile' ? 1 : 0.5 }} widthe="24" heigth="24" fill="#FFF" />}
            </S.TabItem>
        </S.TabArea>
    )
}