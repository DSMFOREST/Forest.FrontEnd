import React, { Component } from 'react';
import styled, {css, keyframes} from 'styled-components'
import logo from '../../src/logo.png'
import {Link} from 'react-router-dom'

const ModalAnimation = keyframes`
    0%, 100%, 60%, 75%, 90% {
      -webkit-transition-timing-function: cubic-bezier(0.215, .61, .355, 1);
      transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
    }
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, 3000px, 0);
      -ms-transform: translate3d(0, 3000px, 0);
      transform: translate3d(0, 3000px, 0)
    }
    60% {
      opacity: 1;
      -webkit-transform: translate3d(0, -20px, 0);
      -ms-transform: translate3d(0, -20px, 0);
      transform: translate3d(0, -20px, 0)
    }
    75% {
      -webkit-transform: translate3d(0, 10px, 0);
      -ms-transform: translate3d(0, 10px, 0);
      transform: translate3d(0, 10px, 0)
    }
    90% {
      -webkit-transform: translate3d(0, -5px, 0);
      -ms-transform: translate3d(0, -5px, 0);
      transform: translate3d(0, -5px, 0)
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0)
    }
`

const MainStyled = styled.div`
    width: 100vw;
    height: 100vh;
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

const TitleStyled = styled.input`
    width: 1236px;
    height: 58px;
    border: none;
    border-radius: 20px;
    background-color: #ffffff;
    font-family: NanumSquareRoundR;
    font-size: 39px;
    color: #88ba40;

    &::placeholder {
        color: #88ba40;
    }

    padding-left: 17px;
`

const WriteZone = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 1270px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 27px;
`

const ContentStyled = styled.textarea`
    margin-top: 27px;
    width: 1270px;
    height: 386px;
    border: none;
    border-radius: 22px;
    background-color: #ffffff;
    resize: none;
    padding-left: 23px;
    padding-top: 11px;
    padding-bottom: 11px;
    padding-left: 23px;
    font-size: 39px;
    color: #88ba40;
    font-family: NanumSquareRoundR;

    &::placeholder {
        color: #88ba40;
    }
`

const ButtonZone = styled.div`
    margin-top: 23px;
    display: flex;
    justify-content: flex-end;
`

const CancleButton = styled.button`
    width: 161px;
    height: 60px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.16);
    background-color: #ba4040;
    margin-right: 20px;
    color: #ffffff;
    font-size: 35px;
    font-family: NanumSquareRoundB;
    cursor: pointer;
`

const WriteButton = styled.button`
    width: 161px;
    height: 60px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.16);
    background-color: #88ba40;
    margin-right: 50px;
    color: #ffffff;
    font-size: 35px;
    font-family: NanumSquareRoundB;
    cursor: pointer;
    ${props => props.modal && 
        `margin-right: 0px;`
    }
`
const Modal = styled.div`
    position: fixed;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ModalBackground = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(161, 161, 161, 0.41);
`
const ModalPopup = styled.div`
    position: absolute;
    width: 898px;
    height: 449px;
    border-radius: 31px;
    background-color: #ffffff;
    z-index: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    ${props => props.modal &&
        css`animation: ${ModalAnimation} .5s linear`
    }
`

const ModalTitle = styled.h1`
    font-size: 42px;
    color: #88ba40;
    font-family: NanumSquareRoundB;
    margin: 0;
`

const ModalContents = styled.div`
    font-size: 31px;
    color: #88ba40;
    font-family: NanumSquareRoundB;
`

const StyledLink = styled(Link)`
    color: #ffffff;
    text-decoration: none !important;
    &:hover {text-decorate: none;}
    &:active {text-decorate: none;}
`

class WritePost extends Component {
    render() {
        return (
            <MainStyled>
                <HeaderStyled>
                    <Logo/>
                </HeaderStyled>
                <WriteZone>
                    <TitleStyled placeholder = "제목을 입력하세요"/>
                    <ContentStyled placeholder = "내용을 입력하세요"/>
                </WriteZone>
                <ButtonZone>
                <StyledLink to = "/"><CancleButton>취소</CancleButton></StyledLink>
                    <WriteButton onClick = {this.props.ToggleModalState}>글쓰기</WriteButton>
                </ButtonZone>
                {this.props.modal && 
                    <Modal>
                        <ModalBackground onClick = {this.props.ToggleModalState}/>
                        <ModalPopup modal = {this.props.modal}>
                            <ModalTitle>정말 글을 작성하시겠습니까?</ModalTitle>
                            <ModalContents>작성한 글은 관리자가 승인하기 전까지 올라오지 않습니다</ModalContents>
                            <ButtonZone>
                                <CancleButton onClick = {this.props.ToggleModalState}>취소</CancleButton>
                                <StyledLink to = "/"><WriteButton modal = {this.props.modal} onClick = {this.props.ToggleModalState}>글쓰기</WriteButton></StyledLink>
                            </ButtonZone>
                        </ModalPopup>
                    </Modal>
                }
            </MainStyled>
        );
    }
}

export default WritePost;