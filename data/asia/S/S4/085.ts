import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "傲骨燕"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "不擅長應付寒冷的季節。為了尋找溫暖的地帶，會１天飛上３００公里的距離。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "二連啄"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×20點傷害。"
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card