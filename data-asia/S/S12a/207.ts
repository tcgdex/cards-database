import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "派拉斯"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'zh-tw': "控制蟲子的是一種叫做冬蟲夏草的蕈類。蟲子的意志會被忽視。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "吸取"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「10」HP。"
		},

		damage: 20,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card