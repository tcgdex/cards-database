import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "師父鼬"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'zh-tw': "當牠遇上真正的強敵時，會將雙臂的毛咬斷丟棄， 讓自己的身體更加輕盈。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "拍擊"
		},

		damage: 30,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "雙重粉碎"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×70點傷害。"
		},

		damage: "70×",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card