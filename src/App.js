import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components'
import Login from './components/Login/Login'
import Main from './components/Main/Main'
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

  ToggleLoginSection = () => {
      this.setState({
        loginSection : !this.state.loginSection
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
    texts: [
      {id : 1, text : "집에가고싶다"},
      {id : 2, text : "새벽롤 파티원 구함 ㅋ"},
      {id : 3, text : "나는 하늘을 나는 새"},
      {id : 4, text : "고마워요~"},
      {id : 5, text : "재밌는 롤 하실 사람 구합니다 선착순 5명 까지! aaaaaaaaaaaaaaaaaaaaa"},
      {id : 6, text : "무요"},
      {id : 7, text : "떴다 떴다 비행기 날아라 날아라"},
      {id : 8, text : "자바스크립트입니다!"}
    ]
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Route exact path = "/" render = {props => <Main texts = {this.state.texts}/>}/>
        <Route exact path = "/login" render = {props => 
        <Login HandleAnimationEnd = {this.HandleAnimationEnd}
        HandleAnimationIteration = {this.HandleAnimationIteration}
        animationRepeat = {this.state.animationRepeat}
        login = {this.state.loginSection}
        ToggleloginSection = {this.ToggleLoginSection}
        Animation = {this.state.animation}
        />}/>
      </div>
    );
  }
}

export default App;
