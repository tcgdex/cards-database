import { Card } from "../../../interfaces"
import Set from "../SDL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "六尾"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'zh-tw': "雖然還是孩子，但已擁有美麗的６根尾巴。 長大後尾巴會變得更多。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "飛撲"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。"
		},

		damage: "10+",
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