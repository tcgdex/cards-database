import { Card } from "../../../interfaces"
import Set from "../SH"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "達克萊伊"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		'zh-tw': "有著引誘人們進入深層睡眠，並使其作夢的能力。會在新月之夜活動。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "暗黑利刃"
		},

		damage: 90,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card