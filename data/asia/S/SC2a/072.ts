import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "泥偶小人"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "誕生自黏土的古代寶可夢。不知為何，有一些泥偶小人會不斷地把大石頭排列起來。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "滾動"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			'zh-tw': "頭突"
		},

		damage: 50,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
