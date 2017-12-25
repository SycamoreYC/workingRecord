import React from 'react';
import { observer } from 'mobx-react';
import TreeNode from './TreeNode';
import treeStore from './store';


@observer
export default class Tree extends React.Component {

	rendTree(data) {
		if (data.length === 0) {
			return;
		}
		const nodeList =  data.map((node, index) => {
			if (node.children) {
				this.rendTree(node.children);
			}
			return <TreeNode
				key={index}
				item={node}
				leafNode={data.length === 0}/>
		});
		return (
			<ul style={{ listStyle: 'none' }}>{nodeList}</ul>
		);
	}

	render() {
		return (
			<div>
				{this.rendTree(treeStore.treeData)}
			</div>
		)
	}
}


