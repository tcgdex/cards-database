import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "凍原熊"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		'zh-tw': "吐出的氣息凍結而成的冰牙比鋼鐵還硬。為了尋找食物，會在寒冷的海裡游動徘徊。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "劈開"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "結冰斬"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到50點傷害。"
		},

		damage: 150,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
