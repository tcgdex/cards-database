import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "六尾"
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'zh-tw': "雖然還是孩子，但已擁有美麗的６根尾巴。長大後尾巴會變得更多。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "火焰"
		},

		damage: 20,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
