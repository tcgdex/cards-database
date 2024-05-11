import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "投摔鬼"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'zh-tw': "能使出一流的投摔招式。帶子被戰鬥時流下的汗水 浸濕，顏色越變越深。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撞倒"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "地球上投"
		},

		damage: 110,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card