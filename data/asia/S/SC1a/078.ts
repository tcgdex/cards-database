import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷吉洛克V"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
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
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "巨岩衝撞"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 190,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card