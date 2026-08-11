import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "土居忍士"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		'zh-tw': "因為長時間生活在地底下，所以眼睛幾乎什麼都看不到。會靠觸角來探察周圍的狀況。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "吸取"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「10」HP。"
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card