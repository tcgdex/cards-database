import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大鋼蛇V"
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 250,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "激怒之錘"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上放置的傷害指示物的數量×10點傷害。"
		},

		damage: "30+",
		cost: ["Metal", "Colorless"]
	}, {
		name: {
			'zh-tw': "鐵之衝撞"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 210,
		cost: ["Metal", "Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card
