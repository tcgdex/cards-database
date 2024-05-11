import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "熔岩蟲"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'zh-tw': "有著由熔岩構成的身體。如果不持續運動，身體就會因變冷而凝固。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "哈欠"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "火焰"
		},

		damage: 30,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card