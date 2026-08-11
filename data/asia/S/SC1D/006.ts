import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "木棉球"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "會噴出棉花保護身體。有時會被颱風吹到地球的另一邊。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "附著"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
