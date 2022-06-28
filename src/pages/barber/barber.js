import React, { useState, useEffect } from 'react'
import * as S from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import Api from '../../api/api'
import Swiper from 'react-native-swiper'
import Stars from '../../components/stars/stars'
import BaberModal from '../../components/baberModal/baberModal'
import FavIcon from '../../assets/favorite.svg'
import FavIconFull from '../../assets/favorite_full.svg'
import BackICon from '../../assets/back.svg'
import PrevIcon from '../../assets/nav_prev.svg'
import NExtICon from '../../assets/nav_next.svg'

export default function Barber() {
    const navigation = useNavigation()
    const route = useRoute()
    const [loading, setLoading] = useState(true)
    const [favorit, setfavorit] = useState(false)
    const [selectService, setselectService] = useState(null)
    const [showmodal, setshowmodal] = useState(false)
    const [info, setinfo] = useState({
        id: route?.params?.id,
        avatar: route?.params?.avatar,
        name: route?.params?.name,
        stars: route?.params?.stars,
    })

    useEffect(() => {
        async function getBaberinfo() {
            let date = await Api.getBarbe(route?.params?.id)
            setinfo(date)
            setfavorit(date?.favorited)
            setLoading(false)
            console.log(info.available)
        }

        getBaberinfo()
    }, [route])
    function handlBackButton() {
        navigation.goBack();
    }
    function handlFav() {
        setfavorit(!favorit)
    }
    function handlerService(id) {
        setselectService(id)
        setshowmodal(true)
    }

    return (
        <>
            <S.Container>
                <S.Scrolviw>
                    {info.photos && info.photos.length > 0 ?
                        <Swiper
                            style={{ height: 240 }}
                            dot={<S.SwipeDote />}
                            activeDot={<S.SwipeDoteAtive />}
                            paginationStyle={{ top: 15, right: 15, bottom: null, left: null }}
                            autoplay={true}
                            loop={true}
                        >
                            {info.photos.map((item, key) => {

                                return (
                                    <S.SwaipeITem key={key}>
                                        <S.SawipImg source={{ uri: item.url }} resizingMode="cover" />
                                    </S.SwaipeITem>
                                )
                            })}
                        </Swiper>
                        :
                        <S.FakeSwiper>

                        </S.FakeSwiper>
                    }
                    <S.PageBody>
                        <S.USerInfoArea>

                            <S.UserAvatar source={{ uri: info.avatar }} />
                            <S.UserInfo>
                                <S.UserInfoName>{info.name}</S.UserInfoName>
                                <Stars stars={info.stars} showNumber={true} />
                            </S.UserInfo>
                            <S.USerFavButton onPress={() => handlFav()}>
                                {favorit ? <FavIconFull width="24" height="24" fill="red" /> : <FavIcon width="24" height="24" fill="red" />}
                            </S.USerFavButton>
                        </S.USerInfoArea>
                        {loading && <S.LoadingIcon size="large" color="black" />}
                        <S.AreaServico>
                            <S.ServiceTitle>Lista de serviço</S.ServiceTitle>
                            {info?.services?.map((item, index) => {
                                console.log(item)
                                return (
                                    <S.ServiceItem key={index}>
                                        <S.ServiceInfo>
                                            <S.ServiceNmae>{item.name}</S.ServiceNmae>
                                            <S.ServicePreco>R$: {item.price}</S.ServicePreco>
                                        </S.ServiceInfo>
                                        <S.ServiceButton onPress={() => handlerService(index)}>
                                            <S.ServiceBtnText>
                                                Agendar
                                            </S.ServiceBtnText>
                                        </S.ServiceButton>
                                    </S.ServiceItem>
                                )
                            })}
                        </S.AreaServico>
                        {info?.testimonials?.length > 0 &&
                            <S.Depoi>
                                <Swiper
                                    style={{ height: 110 }}
                                    showsPagination={false}
                                    showsButtons={true}
                                    prevButton={<PrevIcon fill="black" width="35" height="35" />}
                                    nextButton={<NExtICon fill="black" width="35" height="35" />}
                                >
                                    {info?.testimonials?.map((item, index) => {
                                        return (
                                            <S.TesteMunITem key={index}>
                                                <S.TesteMunInfo>
                                                    <S.TestMunNAme>{item.name}</S.TestMunNAme>
                                                    <Stars stars={item.rate} showNumber={false} />
                                                </S.TesteMunInfo>
                                                <S.TesMunBody>{item.body}</S.TesMunBody>

                                            </S.TesteMunITem>
                                        )
                                    })}
                                </Swiper>
                            </S.Depoi>
                        }
                    </S.PageBody>
                </S.Scrolviw>

                <S.BackButton onPress={handlBackButton}>
                    <BackICon width="44" height="44" fill="#FFF" />
                </S.BackButton>
                <BaberModal
                    show={showmodal}
                    setShowmodal={setshowmodal}
                    userInfo={info}
                    service={selectService}
                />
            </S.Container>
        </>
    )
}