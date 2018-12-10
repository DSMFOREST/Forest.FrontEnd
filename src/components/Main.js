import React, { Component } from 'react';
import styled from 'styled-components'
import logo from '../src/logo.png'
import TextList from '../components/TextList'

const MainStyled = styled.div`
    width: 100%;
    height: 100%;
    background-color: #ebebeb;
    overflow: scroll-y;
`

const HeaderStyled = styled.div`
    width: 100%;
    height: 48px;
    background-color: #88ba40;
    display: flex;
    align-items: center;

`
const Logo = styled.img.attrs({
    src : logo
})`
    background-color: white;
    border-radius: 175px;
    width: 40px;
    height: 40px;
    margin-left: 13px;
`

const TextZone = styled.div`
    width: 784px;
    margin-left: auto;
    margin-right: auto;
`

class Main extends Component {
    render() {
        return (
            <MainStyled>
                <HeaderStyled>
                    <Logo/>
                </HeaderStyled>
                <TextZone>
                    <TextList texts = {this.props.texts}/>
                </TextZone>
            </MainStyled>
        );
    }
}

export default Main;