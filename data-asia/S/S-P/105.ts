import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "不良蛙"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'zh-tw': "毒素在稀釋後能製成藥品。牠是製藥公司的吉祥物，廣受眾人的歡迎。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "推擊"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card