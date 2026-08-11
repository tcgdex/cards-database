import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "派拉斯"
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "即使不停地吃，不停地吃，大部分攝取的營養都會被生長在背上的蘑菇奪走。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "抓"
		},

		damage: 20,
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
