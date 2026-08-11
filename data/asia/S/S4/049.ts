import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "木棉球"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "會噴出棉花保護身體。有時會被颱風吹到地球的另一邊。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "滾動衝撞"
		},

		damage: 10,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card