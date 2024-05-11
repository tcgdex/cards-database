import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "熔岩蟲"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'zh-tw': "有著由熔岩構成的身體。如果不持續運動， 身體就會因變冷而凝固。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "吸入"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張【火】能量卡，附於這隻寶可夢身上。"
		},

		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "烈焰"
		},

		damage: 50,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card