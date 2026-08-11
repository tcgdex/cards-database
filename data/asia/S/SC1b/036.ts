import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "六尾"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'zh-tw': "雖然還是孩子，但已擁有美麗的６根尾巴。長大後尾巴會變得更多。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "奇異之光"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		},

		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "踢飛"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
