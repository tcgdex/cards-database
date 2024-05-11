import { Card } from "../../../interfaces"
import Set from "../SPD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "海星星"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "在夏天快結束時到海邊，就能看見成群的海星星 有規律地一閃一閃發光。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "雙重旋轉"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×10點傷害。"
		},

		damage: "10×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card