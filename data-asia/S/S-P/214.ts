import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "阿勃梭魯"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		'zh-tw': "如風般地奔馳在山野中。形狀如弓的角能夠敏銳 感應到自然災害的預兆。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "劈開"
		},

		damage: 30,
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "放逐爪"
		},

		effect: {
			'zh-tw': "在不看正面的情況下，選擇1張對手的手牌，放置於放逐區。"
		},

		damage: 70,
		cost: ["Darkness", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "劈開"
		},

		damage: 30,
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "放逐爪"
		},

		effect: {
			'zh-tw': "在不看正面的情況下，選擇1張對手的手牌，放置於放逐區。"
		},

		damage: 70,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card