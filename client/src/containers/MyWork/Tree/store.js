import { observable } from 'mobx';

class treeStore {
	@observable
	treeData = [
		{
			id: '1',
			content: '节点1',
			children: [
				{
					id: '1.1',
					content: '节点1.1',
					children: [
						{
							id: '1.1.1',
							content: '节点1.1.1',
							children: [
								{
									id: '1.1.1.1',
									content: '节点1.1.1.1',
									children: []
								},
								{
									id: '1.1.1.2',
									content: '节点1.1.1.2',
									children: []
								}
							]
						},
						{
							id: '1.1.2',
							content: '节点1.1.2',
							children: [
								{
									id: '1.1.2.1',
									content: '节点1.1.2.1',
									children: []
								},
								{
									id: '1.1.2.2',
									content: '节点1.1.1.2',
									children: []
								}
							]
						},
					]
				}
			]
		},
		{
			id: '2',
			content: '节点2',
			children: [
				{
					id: '2.1',
					content: '节点2.1',
					children: [
						{
							id: '2.1.1',
							content: '节点2.1.1',
							children: [
								{
									id: '2.1.1.1',
									content: '节点2.1.1.1',
									children: []
								},
								{
									id: '2.1.1.2',
									content: '节点2.1.1.2',
									children: []
								}
							]
						},
						{
							id: '2.1.2',
							content: '节点2.1.2',
							children: [
								{
									id: '2.1.2.1',
									content: '节点2.1.2.1',
									children: []
								},
								{
									id: '2.1.2.2',
									content: '节点2.1.2.2',
									children: []
								}
							]
						},
						{
							id: '2.1.3',
							content: '节点2.1.3',
							children: [
								{
									id: '2.1.3.1',
									content: '节点2.1.3.1',
									children: []
								},
								{
									id: '2.1.3.2',
									content: '节点2.1.3.2',
									children: []
								}
							]
						}
					]
				}
			]
		},
	];
	@observable
	selectedData = [
		{
			id: '1',
			content: '节点1',
			children: [
				{
					id: '1.1',
					content: '节点1.1',
					children: [
						{
							id: '1.1.1',
							content: '节点1.1.1',
							children: [
								{
									id: '1.1.1.1',
									content: '节点1.1.1.1',
									children: []
								},
								{
									id: '1.1.1.2',
									content: '节点1.1.1.2',
									children: []
								}
							]
						},
						{
							id: '1.1.2',
							content: '节点1.1.2',
							children: [
								{
									id: '1.1.2.1',
									content: '节点1.1.2.1',
									children: []
								},
								{
									id: '1.1.2.2',
									content: '节点1.1.1.2',
									children: []
								}
							]
						},
					]
				}
			]
		}
		// {
		// 	id: '2',
		// 	content: '节点2',
		// 	children: [
		// 		{
		// 			id: '2.1',
		// 			content: '节点2.1',
		// 			children: [
		// 				{
		// 					id: '2.1.1',
		// 					content: '节点2.1.1',
		// 					children: [
		// 						{
		// 							id: '2.1.1.1',
		// 							content: '节点2.1.1.1',
		// 							children: []
		// 						},
		// 						{
		// 							id: '2.1.1.2',
		// 							content: '节点2.1.1.2',
		// 							children: []
		// 						}
		// 					]
		// 				},
		// 				{
		// 					id: '2.1.2',
		// 					content: '节点2.1.2',
		// 					children: [
		// 						{
		// 							id: '2.1.2.1',
		// 							content: '节点2.1.2.1',
		// 							children: []
		// 						},
		// 						{
		// 							id: '2.1.2.2',
		// 							content: '节点2.1.2.2',
		// 							children: []
		// 						}
		// 					]
		// 				},
		// 				{
		// 					id: '2.1.3',
		// 					content: '节点2.1.3',
		// 					children: [
		// 						{
		// 							id: '2.1.3.1',
		// 							content: '节点2.1.3.1',
		// 							children: []
		// 						},
		// 						{
		// 							id: '2.1.3.2',
		// 							content: '节点2.1.3.2',
		// 							children: []
		// 						}
		// 					]
		// 				}
		// 			]
		// 		}
		// 	]
		// },
	]
}

export default new treeStore()