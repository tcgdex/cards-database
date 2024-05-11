import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "拉魯拉絲"
	},

	illustrator: "Hataya",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "傾向於親近心情開朗之人而非心情低落之人，且無男女老少之分。 更深入的調查乃是當前課題。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "瞬間移動突擊"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。"
		},

		damage: 10,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card