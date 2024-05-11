import { Card } from "../../../interfaces"
import Set from "../S6K"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "藍蟾蜍"
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		'zh-tw': "有時也會發出悅耳的叫聲。身上突起物越大的藍蟾蜍越能以更廣的音域來鳴叫。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "踩"
		},

		damage: 20,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "舌擊"
		},

		damage: 50,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card