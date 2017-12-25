import React from 'react';
import { observer } from 'mobx-react';
import TreeNode from './TreeNode';
import treeStore from './store';


@observer
export default class Tree extends React.Component {

	onSelect = (item, selectedNodes) => () => {
		const selectedIndex = selectedNodes.findIndex(node => node.id === item.id);
		if (selectedIndex > -1) {
			selectedNodes.splice(selectedIndex, 1);
		}
	}
	;

	rendTree(data) {
		if (data.length === 0) {
			return;
		}
		const nodeList =  data.map((node, index) => {
			const selectedNodes = this.findSelectedNodes(node);

			if (node.children) {
				this.rendTree(node.children);
			}
			return <TreeNode
				selectedNodes={() => selectedNodes}
				onSelect={this.onSelect(node, treeStore.selectedData)}
				key={index}
				item={node}
				leafNode={data.length === 0}/>
		});
		return (
			<ul style={{ listStyle: 'none' }}>{nodeList}</ul>
		);
	}

	findSelectedNodes(node) {
		const selectedData = treeStore.selectedData;
		if (!selectedData) return;
		return selectedData.find(item => item.id === node.id);
	}

	render() {
		return (
			<div>
				{this.rendTree(treeStore.treeData)}
			</div>
		)
	}
}


