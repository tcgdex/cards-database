import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "九尾"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "靈異火焰"
		},

		damage: 70,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card