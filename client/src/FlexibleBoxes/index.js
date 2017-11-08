// 需求背景
// 实现要素
import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

const list = [...new Array(5)].map(item => 'hello');

const cardStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100px',
  height: '40px',
  border: '1px solid #000',
  margin: '10px'
}

const hideStyle = {
  height: '62px',
  overflow: 'hidden',
  display: 'flex',
  flexWrap: 'wrap'
}

const strenchStyle = {
  height: 'auto',
  display: 'flex',
  flexWrap: 'wrap'
}

@observer
export default class FlexibleBoxes extends React.Component {

  constructor() {
    super()
  }

  @observable showButton = false;
  @observable hideState = true;

  componentDidMount() {
    this.showOrHideModelExpandButton('listWrap');
    window.addEventListener('resize', this.onResizeHandle);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.onResizeHandle);
	}

  onResizeHandle = () => {
    this.showOrHideModelExpandButton('listWrap');
  }

  changeHidestate = () => {
    this.hideState = !this.hideState;
  }

  showOrHideModelExpandButton(id) {
		const node = document.getElementById(id);
		if (node) {
			if (node.scrollHeight > 62) {
				this.showButton = true;
			} else {
				this.showButton = false;
			}
		}
	}

  rendList() {
    return list.map((item, index) =>
    <div key={index} style={cardStyle}>{item}</div>)
  }

  rendButton() {
    if (this.showButton) {
      return <input type="button" value={this.hideState ? '展开' : '收起'} onClick={this.changeHidestate} />;
    }
    return null;
  }

  render() {
    return <div style={{display: 'flex'}}>
      <div id="listWrap" style={this.hideState ? hideStyle : strenchStyle }>{this.rendList()}</div>
      <div>{this.rendButton()}</div>
    </div>
  }
}
