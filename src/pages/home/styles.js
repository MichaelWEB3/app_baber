import React from "react";
import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #63C2D1;

`

export const TItle = styled.Text``


export const Scroller = styled.ScrollView`
  flex:1;
  padding: 20px;
`

export const HeaderAea = styled.View`
 width: 100%;
 display: flex;
 flex-direction :row ;
 justify-content: space-between;
 align-items: center;
`

export const TextHeader = styled.Text`
font-size: 25px;
font-weight: bold;
color: #FFF;
width:200px;
`

export const SearchICon = styled.TouchableOpacity`

`

export const LocationArea = styled.View`
background-color: #4EADBE;
height: 60px;
border-radius: 30px;
flex-direction: row;
align-items: center;
padding-left: 20px;
padding-right: 20px;
margin-top: 30px;
`
export const LocaitonInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #FFF;
`

export const LocationFinde = styled.TouchableOpacity`
width: 24px;
height: 24px;
`

export const LoadingLocation = styled.ActivityIndicator`
  margin-top: 50px;
`

export const ListaArea = styled.View`
margin-top: 30px;
margin-bottom: 30px;
`