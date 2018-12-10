import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components'
import Login from './components/Login'
import Main from './components/Main'

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
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
      {id : 2, text : "새벽롤 파티원 구함 ㅋ"}
    ]
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Main text = {this.state.texts}/>
      </div>
    );
  }
}

export default App;
