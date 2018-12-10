import React, { Component } from 'react';
import TestItem from './TextItem';

class TextList extends Component {
    render() {
        const RenderList = this.props.texts.map(
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