import React from 'react';
import { MoveCursorStyle } from './style';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import store from './store';

@observer
export default class MoveCursor extends React.Component {

  @observable textContent = '';

  componentDidMount() {
    this.textBlock.focus();
    store.getTagsList();
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
    if (store.data) {
      return store.data.map((item, index) => <div key={index} style={MoveCursorStyle.textButton} onClick={() => this.addText(item.Message)} >{item.Message}</div>);
    }
    return null;
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
