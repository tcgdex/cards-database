import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "波爾凱尼恩V"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "高溫爆破"
		},

		damage: 50,
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			'zh-tw': "炸藥衝撞"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上放置有10個以上的傷害指示物，則增加150點傷害。"
		},

		damage: "100+",
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card