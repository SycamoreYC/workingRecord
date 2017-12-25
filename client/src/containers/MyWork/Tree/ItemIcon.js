import React from 'react';
import { Icon } from 'semantic-ui-react';

export default class ItemIcon extends React.Component {

	static getIconName(leafNode, expand) {
		if (leafNode) {
			return 'envira';
		}
		if (expand) {
			return 'triangle up';
		}
		return 'triangle down'
	}

	render() {
		const { expand, leafNode, onClick } = this.props;

		return (
			<Icon name={ItemIcon.getIconName(leafNode, expand)} color="black" style={{ cursor: 'pointer' }} onClick={onClick} />
		)
	}
}