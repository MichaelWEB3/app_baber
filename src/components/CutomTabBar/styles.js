import React from "react";
import styled from "styled-components";

export const TabArea = styled.View`
 width: 100%;
 height: 60px;
 background-color: #4EADBE;
 flex-direction: row;

`
export const TabItem = styled.TouchableOpacity`
 flex: 1;
 justify-content: center;
 align-items: center;
`

export const TabItemCenter = styled.TouchableOpacity`
 width: 70px;
 height: 70px;
 background-color: #FFF;
 border-radius: 35px;
 justify-content: center;
 align-items: center;
 border: 4px solid #4EADBE;
 margin-top: -20px;
`

export const AvatarIcon = styled.Image`
width: 35px;
height: 35px;
border-radius: 35px;

`