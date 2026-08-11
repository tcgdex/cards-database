import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "斧牙龍"
	},

	illustrator: "Hataya",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "銳利之牙"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "龍爪"
		},

		damage: 60,
		cost: ["Fighting", "Metal"]
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card