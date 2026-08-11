import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "樹才怪"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		'zh-tw': "如果在沒風的日子看見樹在搖擺，那就是樹才怪。據說在下雨時會躲起來。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "雙重抽出"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出2張卡。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "抓狂"
		},

		effect: {
			'zh-tw': "造成這隻寶可夢身上放置的傷害指示物的數量×10點傷害。"
		},

		damage: "10×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
