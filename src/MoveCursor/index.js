import React from 'react';
import { MoveCursorStyle } from './style';

const textTags = ['阿萨德', '撒打算打算打算', '12321321321312'];
export default class MoveCursor extends React.Component {

  componentDidMount() {
    this.textBlock.focus();
  }

  rendTextTags() {
    return textTags.map((item, index) => <div key={index} style={MoveCursorStyle.textButton} >{item}</div>);
  }
  render() {
    return (
      <div>
        <textArea ref={ele => this.textBlock = ele}></textArea>
        <div>{this.rendTextTags()}</div>
      </div>
    );
  }
}
