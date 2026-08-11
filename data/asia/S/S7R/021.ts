import { Card } from "../../../interfaces"
import Set from "../S7R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "暴鯉龍VMAX"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 330,
	types: ["Water"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "極巨暴君"
		},

		damage: 240,
		cost: ["Water", "Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card