import { Card } from "../../../interfaces"
import Set from "../SCD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "拳拳蛸"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "敲擊"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "拳骨"
		},

		damage: 20,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card