import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 達摩狒狒VMAX"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "極巨暴雪"
		},

		effect: {
			'zh-tw': "對手的所有備戰寶可夢也各受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 200,
		cost: ["Water", "Water", "Water", "Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card