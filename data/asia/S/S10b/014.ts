import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "噴火駝"
	},

	illustrator: "yuu",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'zh-tw': "發怒時會從背上的駝峰裡噴出灼熱的熔岩。在火山口有牠的住所。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "爆裂彈"
		},

		effect: {
			'zh-tw': "對手的2隻寶可夢各受到50點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Fire", "Colorless"]
	}, {
		name: {
			'zh-tw': "高溫爆破"
		},

		damage: 120,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card