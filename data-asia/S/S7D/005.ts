import { Card } from "../../../interfaces"
import Set from "../S7D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "冷水猴"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "頭上的毛髮叢裡儲藏的水充滿營養。如果拿來灌溉，植物就會茁壯成長。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "猛地一動"
		},

		effect: {
			'zh-tw': "查看對手的手牌。"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card