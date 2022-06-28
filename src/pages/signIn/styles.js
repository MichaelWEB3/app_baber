import styled from "styled-components";

export const Container = styled.SafeAreaView`
   flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #63C2D1;

`
export const InputArea = styled.View`
    width: 100%;
    padding: 40px;
`
export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #268596;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
`
export const CustomButomText = styled.Text`
    font-size: 18px;
    color: #FFF;

`
export const MessengeButton = styled.TouchableOpacity`
flex-direction: row;
justify-content: center;
margin-top: 50px;
margin-bottom: 20px;

`

export const MessengeButtonText = styled.Text`
    font-size: 16px;
    color:#268596;

`
export const MessengeButtonTextBold = styled.Text`
    font-size: 16px;
    color:#268596;
    font-weight: bold;
    margin-left: 5px;

`