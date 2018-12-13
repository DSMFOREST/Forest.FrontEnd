import React, { Component } from 'react';
import styled from 'styled-components'
import logo from '../../src/logo.png'
import TextList from './TextList'
import plusButton from '../../src/plus_green.png'
import bugReportButton from '../../src/bugReportbtn.png'
import writingButton from '../../src/writingbtn.png'
import { Link } from 'react-router-dom'

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
    z-index: 1;
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

const PlusButton = styled.div`
    position: fixed;
    bottom: 50px;
    right: 301px;
    width: 83px;
    height: 83px;
    background-image: url(${plusButton});
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;
    cursor: pointer;
`

const WriteButton = styled.div`
    position: fixed;
    right: 301px;
    bottom: 50px;
    width: 83px;
    height: 83px;
    background-image: url(${writingButton});
    background-size: cover;
    background-repeat: no-repeat;
    ${props => props.plus && `bottom: 153px;`}
    transition: bottom .3s linear;
    cursor: pointer;
`
const BugReportButton = styled.div`
    position: fixed;
    bottom: 50px;
    right: 301px;
    width: 83px;
    height: 83px;
    background-image: url(${bugReportButton});
    background-size: cover;
    background-repeat: no-repeat;
    ${props => props.plus && `bottom: 256px;`}
    transition: bottom .3s linear;
`

const LoginButton = styled.span`
    position: absolute;
    right: 13px;
    font-size: 15px;
    color: #ffffff;
    font-family: NanumSquareRoundB;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #ffffff;
`

const Logout = styled.span`
    cursor: pointer;
`

class Main extends Component {
    render() {
        return (
            <MainStyled>
                <HeaderStyled>
                    <Logo/>
                    <LoginButton>
                        {this.props.login ?
                         <Logout onClick = {this.props.ToggleLoginState}>로그아웃</Logout> : <StyledLink to = "/login">로그인</StyledLink>
                        }
                    </LoginButton>
                </HeaderStyled>
                <TextZone>
                    <PlusButton onClick = {this.props.TogglePlusState}/>
                    <Link to = "/write">
                        <WriteButton plus = {this.props.plusButton}/>
                    </Link>
                    <BugReportButton plus = {this.props.plusButton}/>
                    <TextList texts = {this.props.texts}/>
                </TextZone>
            </MainStyled>
        );
    }
}

export default Main;