import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "泥偶小人"
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		'zh-tw': "誕生自黏土的古代寶可夢。不知為何，有一些泥偶小人 會不斷地把大石頭排列起來。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "擲泥"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "拍擊"
		},

		damage: 20,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card