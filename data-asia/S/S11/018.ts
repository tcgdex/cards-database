import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火箭雀"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'zh-tw': "會朝著獵物的巢穴中噴射火花，再用銳利的爪子解決掉 受驚嚇而跑出來的獵物。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "吐火"
		},

		damage: 30,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card