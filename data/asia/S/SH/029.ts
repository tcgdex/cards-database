import { Card } from "../../../interfaces"
import Set from "../SH"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "八爪武師"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'zh-tw': "會為了試自己的身手而登上陸地尋找對手。戰鬥結束後就會回到海裡。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "撞倒"
		},

		damage: 40,
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "增量拳"
		},

		damage: 90,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card