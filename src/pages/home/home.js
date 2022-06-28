import React, { useState, useEffect } from 'react'
import * as S from './styles'
import { RefreshControl } from 'react-native'
import SearchIcon from '../../assets/search.svg'
import { Platform } from 'react-native'
import MylocationIcon from '../../assets/my_location.svg'
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import api from '../../api/api'
import BarberITem from '../../components/BarberItem/barberITem'
export default function Home({ navigation }) {

    const [valueLocaton, setvalueLocaton] = useState('')
    const [conder, setcorde] = useState(null)
    const [loading, setloading] = useState(false)
    const [List, setList] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    async function showlocation() {
        setcorde(null)
        const result = await request(
            Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        )
        console.log(result)
        if (result == 'granted') {
            setloading(true)
            setvalueLocaton('')
            setList([])

            Geolocation.getCurrentPosition(
                (position) => {
                    console.log(position.coords);
                    setcorde(position.coords);
                    getBarbers()
                },
                (error) => {
                    // See error code charts below.
                    console.log(error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        }
    }

    async function getBarbers() {
        let lat = null
        let long = null
        if (conder) {
            console.log(conder)
            lat = conder.latitude
            long = conder.longitude
        }
        setList([])
        setloading(true)
        const resp = await api.getBarbes(lat, long, valueLocaton)
        setList(resp.data)
        if (resp.loc) setvalueLocaton(resp.loc)
        setloading(false)

    }

    useEffect(() => {
        getBarbers()
        setloading(false)
    }, [])
    function onRef() {
        setRefreshing(true)
        getBarbers()
        setRefreshing(false)
    }

    function handlerLocationSearch() {
        setcorde({})
        getBarbers()
    }

    return (
        <>
            <S.Container>
                <S.Scroller refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRef} />
                } >
                    <S.HeaderAea>
                        <S.TextHeader>Encontre seu barbeiro favorito</S.TextHeader>
                        <S.SearchICon onPress={() => navigation.navigate("Search")}>
                            <SearchIcon width="26" height="26" fill="#FFF" />
                        </S.SearchICon>
                    </S.HeaderAea>

                    <S.LocationArea>
                        <S.LocaitonInput onEndEditing={handlerLocationSearch} onChangeText={text => setvalueLocaton(text)} value={valueLocaton} placeholder="Onde você está?" placeholderTextColor="#FFF" />
                        <S.LocationFinde onPress={showlocation}>
                            <MylocationIcon width="26" height="26" fill="#FFF" />
                        </S.LocationFinde>
                    </S.LocationArea>
                    {loading &&
                        <S.LoadingLocation size="large" color="#FFF" />
                    }
                    <S.ListaArea>
                        {List?.map((item, index) => {

                            return <BarberITem key={index} data={item}></BarberITem>
                        })}
                    </S.ListaArea>
                </S.Scroller>
            </S.Container>
        </>
    )
}