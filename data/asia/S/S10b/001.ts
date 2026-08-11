import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "妙蛙種子"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'zh-tw': "從出生的時候開始背上就有一顆植物種子。這顆種子會漸漸地長大。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "藤鞭"
		},

		damage: 10,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "飛葉快刀"
		},

		damage: 20,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card