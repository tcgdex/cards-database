import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "布魯皇V"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "怒之牙"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上所放置的傷害指示物的數量×10點傷害。"
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "布魯衝刺"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 190,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card