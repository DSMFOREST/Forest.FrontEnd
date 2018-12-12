import React, { Component } from 'react';
import TestItem from './TextItem';

class TextList extends Component {
    render() {
        const { texts } = this.props
        const RenderList = texts.map(
            text => (
                <TestItem
                    id = {text.id}
                    text = {text.text}
                />
            )
        );

        return (
            <div>
                {RenderList}
            </div>
        );
    }
}

export default TextList;