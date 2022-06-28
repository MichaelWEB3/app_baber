import React from "react";
import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FFF;

`
export const Scrolviw = styled.ScrollView`
flex:1;

`
export const FakeSwiper = styled.View`

    height: 240px;
    background-color: #63C2D1;

`
export const PageBody = styled.View`
background-color: #FFF;
border-top-left-radius: 50px;
margin-top: -50px;
min-height: 400px;

`
export const AreaServico = styled.View`
margin-top:50px ;

`

export const Depoi = styled.View`

margin-bottom: 20px;
`

export const TItle = styled.Text``


export const SwipeDote = styled.View`
width: 10px;
height:10px;
background-color: #FFF;
border-radius: 5px;
margin: 3px;

`

export const SwipeDoteAtive = styled.View`
width: 10px;
height:10px;
background-color: black;
border-radius: 5px;
margin: 3px;

`

export const SwaipeITem = styled.View`
flex: 1;
background-color: #63C2D1;

`

export const SawipImg = styled.Image`
width: 100%;
height: 240px;

`
export const USerInfoArea = styled.View`
flex-direction: row;
margin-top: -30px;
`
export const UserInfo = styled.View`
flex: 1;
justify-content: flex-end;
`
export const UserAvatar = styled.Image`
width: 110px;
height: 110px;
border-radius: 20px;
margin-left: 30px;
margin-right: 20px;
border-width: 4px;
border-color: #FFF;

`


export const UserInfoName = styled.Text`
    color: black;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`


export const USerFavButton = styled.TouchableOpacity`
width: 40px;
height: 40px;
background-color: #FFF;
border:2px solid #999999;
border-radius: 20px;
justify-content: center;
align-items: center;
margin-right: 20px;
margin-right: 20px;
margin-top: 20px;
`

export const BackButton = styled.TouchableOpacity`
    position: absolute;
`

export const LoadingIcon = styled.ActivityIndicator`

`

export const LocadICon = styled.ActivityIndicator`

    margin-top: 50px;
`

export const ServiceTitle = styled.Text`

    margin: 20px;
    font-size: 16px;
    font-weight: bold;
    color: #268596;
`
export const ServiceItem = styled.View`
flex-direction: row;
justify-content: space-between;
margin: 20px;
align-items: center;
`
export const ServiceInfo = styled.View`
flex-direction: column;
`
export const ServiceNmae = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #268596;
`
export const ServicePreco = styled.Text`
    font-size: 14px;
    color: #268596;
`
export const ServiceButton = styled.TouchableOpacity`
    border-radius: 10px;
    background-color: #4EADBE;
    padding: 10px;
`
export const ServiceBtnText = styled.Text`
   color: #FFF;
    font-weight: bold;
    font-size: 14px;
`

export const TesteMunITem = styled.View`
background-color: #268596;
padding: 15px;
border-radius: 10px;
height: 110px;
justify-content: center;
margin-left: 50px;
margin-right: 50px;
`
export const TesteMunInfo = styled.View`
flex-direction: row;
justify-content: space-between;
`
export const TestMunNAme = styled.Text`
    font-size: 14px;
    color: #FFF;
    font-weight: bold;
`
export const TesMunBody = styled.Text`
    font-size: 13px;
    color: #FFF;
`
 