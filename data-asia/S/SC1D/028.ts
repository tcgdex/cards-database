import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "燒火蚣"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'zh-tw': "靠儲存在體內的可燃氣體來發熱。熱度最高的是腹部的黃色部分。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "連續火焰"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×40點傷害。"
		},

		damage: "40×",
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
