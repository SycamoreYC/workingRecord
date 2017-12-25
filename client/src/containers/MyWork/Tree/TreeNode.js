import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import ItemIcon from './ItemIcon';

@observer
export default class TreeNode extends React.Component {

	@observable expand = true;

	onSelect = (item, selectedNodes, parentItem) => () => {
		let selectedIndex = null;
		if (selectedNodes) {
			selectedIndex = selectedNodes.children.findIndex(node => node.id === item.id);
			if (selectedIndex > -1) {
				selectedNodes.children.splice(selectedIndex, 1);
				if (selectedNodes.children.length === 0) {
					this.props.onSelect(item, selectedNodes);
				}
			}
			if (selectedIndex === -1) {
				selectedNodes.children.push(item);
			}
		} else {
			const selectedParentNode = {
				id: parentItem.id,
				content: parentItem.content,
				children: []
			};
			selectedParentNode.children.push(item);
			selectedNodes = selectedParentNode;
			// console.log(selectedNodes);
			// this.props.onSelect()
		}
	};

	rendItem(item, selectedNodes) {
		const children = item.children;

		if (children.length === 0) return;

		const items = () => {
			return (
				<ul style={{ listStyle: 'none' }}>
					{children.map((node, index) => {
						const selectedData = this.findSelectedNodes(node);
						return <TreeNode
							selectedNodes={selectedData}
							item={node}
							key={index}
							leafNode={node.children.length === 0}
							onSelect={this.onSelect(node, selectedNodes, item)} />
					})}
				</ul>
			)
		};

		return (items())
	}

	handleIconClick = () => {
		this.expand = !this.expand;
	};

	handleLeafNodeClick = (leafNode) => () => {
		if (leafNode) {
			this.props.onSelect();
		}
	};

	findSelectedNodes(node) {
		const selectedData = this.selectedData();
		if (!selectedData) return;
		return selectedData.children.find(item => item.id === node.id);
	}

	selectedData() {
		if (typeof this.props.selectedNodes === 'function') {
			return this.props.selectedNodes();
		}
		return this.props.selectedNodes;
	}

	render() {
		const { item, leafNode } = this.props;
		const selectedNodes = this.selectedData();
		const itemStyle = {
			cursor: leafNode ? 'pointer' : 'default',
			color: selectedNodes ? '#fff' : '#000'
		};
		return (
			<li style={{ listStyle: 'none' }}>
				<div onClick={this.handleLeafNodeClick(leafNode)} style={itemStyle}>
					<ItemIcon item={item} expand={this.expand} leafNode={leafNode} onClick={this.handleIconClick} />
					{item.content}
				</div>
				<div style={{ display: this.expand ? 'block' : 'none' }} >{this.rendItem(item, selectedNodes)}</div>
			</li>
		)
	}
}