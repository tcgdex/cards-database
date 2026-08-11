import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毒薔薇"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'zh-tw': "只要聞到牠的花香，就能放鬆心情。濃郁的香味是毒薔薇有活力的證明。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "吸取"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「10」HP。"
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
