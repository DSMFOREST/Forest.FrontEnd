import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components'
import Login from './components/Login/Login'
import Main from './components/Main/Main'
import WritePost from './components/WritePost/WritePost'
import { Route } from 'react-router-dom'


const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
  }
`

class App extends Component {

iteration = 0;

  ToggleModalState = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  TogglePlusState = () => {
    this.setState({
      plusButton: !this.state.plusButton
    })
  }

  ToggleLoginSection = () => {
      this.setState({
        loginSection : !this.state.loginSection
      })
  }

  ToggleLoginState = () => {
    this.setState({
      login : !this.state.login
    })
  }

  HandleAnimationEnd = () => {
    this.setState({
      animation: false
    })

    if(!this.state.loginSection) {
      this.setState({
        animation: false,
        animationRepeat : this.state.animationRepeat + 1
      })
    }
  }


  HandleAnimationIteration = () => {

    const Right = document.getElementsByClassName('r19ht0')[0]
    const Left = document.getElementsByClassName('12ft93')[0]
    let temp;

    this.iteration++

    if(this.iteration === 1)
    {
        console.log('실행')
        this.setState({
          animation : true
        })
        this.iteration = 0
        temp = Right.style.zIndex;
        Right.style.zIndex = Left.style.zIndex;
        Left.style.zIndex = temp;
    }
  }

  state = {
    loginSection: true,
    animation: false,
    animationRepeat: 0,
    plusButton: false,
    modal: false,
    login: false,
    texts: [
      {id : 1, text : "집에가고싶다"},
      {id : 2, text : "새벽롤 파티원 구함 ㅋ"},
      {id : 3, text : "나는 하늘을 나는 새"},
      {id : 4, text : "고마워요~"},
      {id : 5, text : "재밌는 롤 하실 사람 구합니다 선착순 5명 까지! aaaaaaaaaaaaaaaaaaaaa"},
      {id : 6, text : "무요"},
      {id : 7, text : "떴다 떴다 비행기 날아라 날아라"},
      {id : 8, text : "자바스크립트입니다!"}
    ],

    textList: [
      {id : 1, text : "집에가고싶다", check: true},
      {id : 2, text : "새벽롤 파티원 구함 ㅋ", check: true},
      {id : 3, text : "나는 하늘을 나는 새", check: true},
      {id : 4, text : "고마워요~", check: true},
      {id : 5, text : "재밌는 롤 하실 사람 구합니다 선착순 5명 까지! aaaaaaaaaaaaaaaaaaaaa", check: true},
      {id : 6, text : "무요", check: true},
      {id : 7, text : "떴다 떴다 비행기 날아라 날아라", check: true},
      {id : 8, text : "자바스크립트입니다!", check: true},
      {id : 9, text : "안녕하세용~", check: false}
    ]
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Route exact path = "/" render = {props => <Main ToggleLoginState = {this.ToggleLoginState} login = {this.state.login} TogglePlusState = {this.TogglePlusState} texts = {this.state.texts} plusButton = {this.state.plusButton}/>}/>
        <Route exact path = "/login" render = {props => 
        <Login HandleAnimationEnd = {this.HandleAnimationEnd}
        HandleAnimationIteration = {this.HandleAnimationIteration}
        animationRepeat = {this.state.animationRepeat}
        login = {this.state.loginSection}
        ToggleLoginState = {this.ToggleLoginState}
        ToggleloginSection = {this.ToggleLoginSection}
        Animation = {this.state.animation}
        />}/>
        <Route exact path = "/write" render = {props => <WritePost ToggleModalState = {this.ToggleModalState} modal = {this.state.modal}/>}></Route>
      </div>
    );
  }
}

export default App;
