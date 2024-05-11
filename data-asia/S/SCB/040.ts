import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "波爾凱尼恩"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		'zh-tw': "從背上的手臂噴出體內的水蒸氣。有著將整座山轟飛的威力。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "頭突"
		},

		damage: 50,
		cost: ["Water", "Colorless"]
	}, {
		name: {
			'zh-tw': "炸藥蒸汽"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×120點傷害。"
		},

		damage: "120×",
		cost: ["Water", "Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card