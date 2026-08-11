import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "燭光靈"
	},

	illustrator: "Nagomi Nijo",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'zh-tw': "吸取到的靈魂越年輕，頭上的燭光就會 燃燒得越旺越詭異。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "吹火"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加10點傷害。"
		},

		damage: "10+",
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card