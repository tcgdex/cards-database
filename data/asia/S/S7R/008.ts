import { Card } from "../../../interfaces"
import Set from "../S7R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "朽木妖VMAX"
	},

	illustrator: "MUGENUP",
	category: "Pokemon",
	hp: 320,
	types: ["Grass"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "極巨樹木"
		},

		damage: 180,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card