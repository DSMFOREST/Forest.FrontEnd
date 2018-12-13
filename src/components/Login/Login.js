import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import SignUpImage from '../../src/cannabis_signUpbtn.png';
import LoginImage from '../../src/cannabis_loginbtn.png';
import RightBackGround from '../../src/greenBackOnly.png';
import LeftBackGround from '../../src/lightGreenBackOnly.png';
import { withRouter } from 'react-router-dom'

const loginToSignupForSignup = keyframes`
    0% {
        left: 45vw;
    }

    100% {
        left: 0px;
    }
`

const signupToLoginForSignup = keyframes`
    0% {
        left: 45vw;
    }

    30% {
        left: 90vw;
    }

    50% {
        left: 90vw;
    }

    70% {
        left: 0;
    }

    100% {
        left: 45vw;
    }
`

const loginToSignupForLogin = keyframes`
    0% {
        right: 30vw;
    }

    20% {
        right: 94vw;
    }

    50% {
        right: 94vw;
    }

    70% {
        right: 0;
    }

    100% {
        right: 30vw;
    }

`

const SignupToLoginForLogin = keyframes`
    0% {
        right: 30vw;
    }

    100% {
        right: 0;
    }

`

const LoginMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: #e1f6c1;
`

const LeftBackground = styled.div`
    position: absolute;
    left: 45vw;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${LeftBackGround});
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 2;
    ${(props) => !props.login &&
        css`animation: ${loginToSignupForSignup} .5s linear 2 alternate;
        `
    }

    ${(props) => props.login && props.animationRepeat !== 0 &&
        css`animation: ${signupToLoginForSignup} 1.5s linear;
        `
    }
`

const RightBackground = styled.div`
    right: 30vw;
    position: absolute;
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${RightBackGround});
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 0;
    ${(props) => !props.login &&
        css`animation: ${loginToSignupForLogin} 1.5s linear;
        `
    }

    ${(props) => props.login && props.animationRepeat !== 0 &&
        css`animation: ${SignupToLoginForLogin} .5s linear 2 alternate;
        `
    }
`

const LoginStyled = styled.div`
    position: absolute;
    display: inline-block;
    width: 744px;
    height: 387px;
    border-radius: 26px;
    box-shadow: 0 8px 3px 0 rgba(0, 0, 0, 0.24);
    background-color: #ffffff;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
    ${(props) => !props.login &&
        `width: 1044px;
        height: 525px;
        `
    }

`

const SignupCannabisButton = styled.img.attrs({
    src: SignUpImage
})`
    display: inline-block;
    width: 234px;
    height: 234px;
    left: 35%;
    position: absolute;
    cursor: pointer;
`

const LoginCannabisButton = styled.img.attrs({
    src: LoginImage
})`
    display: inline-block;
    width: 234px;
    height: 234px;
    left: 35%;
    position: absolute;
    cursor: pointer;
`

const InputStyled = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 459px;
    height: inherit;
    ${(props) => !props.login && `
        right: 0px;
    `}
`

const TitleStyled = styled.div`
    padding-top: 19px;
    text-align: center;
    color: #719c40;
`

const Title = styled.h1`
    margin: 0;
    padding-bottom: 37px;
    font-family: NanumSquareRoundB;
    font-size: 56px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.14;
    letter-spacing: normal;
    ${(props) => props.login &&
    `
        padding-bottom: 21px;
    `
    }
`

const Input = styled.input`
    outline: none;
    padding: 15px 0px 15px 5px;
    width: 396px;
    height: 29px;
    border: none;
    border: 2px solid #719c40;
    border-radius: 11px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
    font-size: 37px;
    font-family: NanumSquareRoundL;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.11;
    letter-spacing: normal;
    text-align: left;
    color: #719c40;

    &::placeholder {
        color: #719c40;
    }

    & + & {
        margin-top: 27px;
    }

    ${(props) => !props.loginID && 
        `width: 260px;
        height: 15px;
        font-size: 20px;
        `
    }
`

const InputPW = styled.input.attrs({
    type: "password"
})`
    outline: none;
    padding: 15px 0px 15px 5px;
    width: 396px;
    height: 29px;
    border: none;
    border: 2px solid #719c40;
    border-radius: 11px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
    font-size: 37px;
    font-family: NanumSquareRoundL;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.11;
    letter-spacing: normal;
    text-align: left;
    color: #719c40;
    margin-top: 29px;

    &::placeholder {
        color: #719c40;
    }

    ${(props) => !props.loginPW && `
        width: 260px;
        height: 15px;
        font-size: 20px;
    `}
`

const ButtonStyled = styled.button`
    margin-top: 53px;
    border: 0px;
    border-radius: 5px;
    width: 128px;
    height: 40px;
    box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.16);
    background-color: #88ba40;
    text-align: center;
    ${(props) => !props.login && `
    margin-top: 20px;
`
}
`
const Button = styled.h2`
    margin: 0;
    margin-bottom: 4px;
    font-family: NanumSquareRoundB;
    font-size: 29px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.14;
    letter-spacing: normal;
    color: #ffffff;
`

const Wapper = styled.div`
    overflow: hidden;
    width: 100vw;
    height: 100vh;
`

class Login extends Component {

    iteration = 0;
    converting = true;
    animation = false;


componentDidMount = () => {
    const Right = document.getElementsByClassName('r19ht0')[0]
    const Left = document.getElementsByClassName('12ft93')[0]
    
    Right.style.zIndex = 0;
    Left.style.zIndex = 2;
}


LoginFunction = () => {
    alert('로그인이 완료되었습니다!')
    this.props.ToggleLoginState()
    this.props.history.push('/')
}

    render() {
        return (
            <Wapper>
                <LoginMain>
                { !this.props.Animation && 
                    <LoginStyled login = {this.props.login}>
                        <InputStyled login = {this.props.login}>
                            <TitleStyled>
                                <Title login = {this.props.login}>
                                    {!this.props.login && 'SignUP'}
                                    {this.props.login && 'Login'}
                                </Title>
                            </TitleStyled>
                                {!this.props.login &&
                                <React.Fragment>
                                    <Input placeholder = "학번/이름 ex) 1101 홍길동" login = {this.props.login}/>
                                    <Input placeholder = "이메일" login = {this.props.login}/>
                                </React.Fragment>
                                }
                                <Input placeholder = "ID" login = {this.props.login} loginID = {this.props.login}/>
                                <InputPW placeholder = "PW" loginPW = {this.props.login}/>
                            <ButtonStyled login = {this.props.login}>                    
                                {!this.props.login && <Button onClick = {()=> alert('회원가입이 완료되었습니다!')}>SignUP</Button>}                
                                {this.props.login && <Button onClick = {this.LoginFunction}>Login</Button>}
                            </ButtonStyled>
                        </InputStyled>
                    </LoginStyled>
                }
                </LoginMain>
                <RightBackground animationRepeat = {this.props.animationRepeat} className = "r19ht0" login = {this.props.login} onAnimationEnd = {this.props.HandleAnimationEnd} onAnimationIteration = {this.props.HandleAnimationIteration}>
                    {!this.props.login &&
                        <LoginCannabisButton onClick = {this.props.ToggleloginSection}/>
                    }
                </RightBackground>

                <LeftBackground animationRepeat = {this.props.animationRepeat} className = "12ft93" login = {this.props.login} onAnimationEnd = {this.props.HandleAnimationEnd} onAnimationIteration = {this.props.HandleAnimationIteration}>
                    {this.props.login &&
                        <SignupCannabisButton onClick = {this.props.ToggleloginSection}/>
                    }
                </LeftBackground>
            </Wapper>
        );
    }
}

export default withRouter(Login);