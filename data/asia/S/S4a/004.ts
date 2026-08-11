import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "膽小蟲"
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'zh-tw': "無論是腐爛的東西還是垃圾都能吃光光，是大自然的清道夫。巢穴附近總是保持乾淨。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬後撤退"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。"
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card