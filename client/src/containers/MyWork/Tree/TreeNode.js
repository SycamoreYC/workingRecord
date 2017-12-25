import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import ItemIcon from './ItemIcon';

@observer
export default class TreeNode extends React.Component {

	@observable expand = true;

	rendItem(item) {
		const children = item.children;

		if (children.length === 0) return;

		const items = () => {
			return (
				<ul style={{ listStyle: 'none' }}>
					{children.map((node, index) => {
						return <TreeNode
							item={node}
							key={index}
							leafNode={node.children.length === 0}/>
					})}
				</ul>
			)
		};

		return (items())
	}

	handleIconClick = () => {
		this.expand = !this.expand;
	};

	render() {
		const { item, leafNode } = this.props;
		const itemStyle = {
			cursor: leafNode ? 'pointer' : 'default'
		};
		return (
			<li style={{ listStyle: 'none' }}>
				<div style={itemStyle}>
					<ItemIcon item={item} expand={this.expand} leafNode={leafNode} onClick={this.handleIconClick} />
					{item.content}
				</div>
				<div style={{ display: this.expand ? 'block' : 'none' }} >{this.rendItem(item)}</div>
			</li>
		)
	}
}