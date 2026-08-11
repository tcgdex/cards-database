import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "莫魯貝可"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		'zh-tw': "饑餓荷爾蒙改變了牠的性情。牠會做盡一切的壞事，直到把肚子填飽為止。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撿飼料"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張物品卡，在給對手看過後加入手牌。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "空腹衝撞"
		},

		effect: {
			'zh-tw': "若自己1張手牌都沒有，則增加90點傷害。"
		},

		damage: "20+",
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card