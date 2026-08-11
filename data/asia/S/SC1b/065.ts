import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鯉魚王"
	},

	illustrator: "kanahei",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		'zh-tw': "力量和速度都不太行。是世界上最弱最可憐的寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "躍起逃走"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。"
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
