import { Card } from "../../../interfaces"
import Set from "../SLL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "瑪沙那"
	},

	illustrator: "313",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "１天只吃１個樹果。藉由忍耐飢餓來來磨練自己的心。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "真氣突刺"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。"
		},

		damage: 30,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card