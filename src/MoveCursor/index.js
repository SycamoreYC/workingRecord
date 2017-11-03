import React from 'react';
import { MoveCursorStyle } from './style';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

const textTags = ['阿萨德', '撒打算打算打算', '12321321321312'];

@observer
export default class MoveCursor extends React.Component {

  @observable textContent = '';

  componentDidMount() {
    this.textBlock.focus();
  }

  addText(text) {
    const cursorIndex = this.textBlock.selectionStart;
    this.textBlock.focus();
    this.textBlock.value = this.textBlock.value.substring(0, cursorIndex) + text + this.textBlock.value.substring(cursorIndex);
    this.textBlock.selectionStart = this.textBlock.selectionEnd = cursorIndex + text.length;
    this.textContent = this.textBlock.value;
  }

  changeText(e) {
    this.textContent = e.target.value;
  }

  rendTextTags() {
    return textTags.map((item, index) => <div key={index} style={MoveCursorStyle.textButton} onClick={() => this.addText(item)} >{item}</div>);
  }
  render() {
    return (
      <div>
        <textArea style={{width: '300px', height: '70px'}}ref={ele => this.textBlock = ele} value={this.textContent} onChange={(e) => this.changeText(e)}/>
        <div>{this.rendTextTags()}</div>
      </div>
    );
  }
}
