import styled from "styled-components/native";

export const Container = styled.ScrollView`
    width: 100%;
    height: 100vh;
    flex: 1;
    background-color: #dedcdc;
`;
export const Header = styled.View`
    width: 100%;
    height: 300px;
    background-color:#240046;
    border-bottom-left-radius: 50px;
    flex-direction: column;
    padding: 20px 0 0 0;
`
export const BoxTxt = styled.View`
    width: 100%;
    height: max-content;
    flex-direction: row;
    align-items: center;
`
export const CenterTxt = styled.View`
    width: 100%;
    height: max-content;
    justify-content: center;
    align-items: center;
`

export const Inforcaixa = styled.View`
    width: 331px;
    height: 85px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    left: 29px;
    border-radius: 20px;
    background-color: #ffffff41;
    margin-bottom: 10px;


`