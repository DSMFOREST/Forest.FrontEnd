import React, { Component } from 'react';
import styled from 'styled-components'
import textImage from '../src/cannabis.png'

const TextItemStyled = styled.div`
    margin-top: 10px;
    width: 784px;
    background-color: #ffffff;
    padding-top: 14px;
    padding-left: 19px;
    padding-bottom: 19px;

    margin-bottom: 10px;

    & + & {
        margin-top: 19px;
    }
`

const TextTitle = styled.div`
    font-family: NanumSquareRoundB;
    font-size: 27px;
    line-height: 1.15;
    color: #719c40;
    display: flex;
    align-items: center;
`

const TextImage = styled.img.attrs({
    src: textImage
})`
    width: 48px;
    height: 48px;
`

const Text = styled.div`
    display: inline-block;
    padding-left: 8px;
`

const Texts = styled.div`
    padding-top: 16px;
    padding-left: 29px;
    font-size: 26px;
    font-family: NanumSquareRoundB;
    color: #5b5b5b;
`

class TextItem extends Component {
    render() {
        return (
            <TextItemStyled>
                <TextTitle>
                    <TextImage/>
                    <Text>    
                       {this.props.id}번 째 대마
                   </Text>
                </TextTitle>
                <Texts>
                    {this.props.text}
                </Texts>
            </TextItemStyled>
        );
    }
}

export default TextItem;