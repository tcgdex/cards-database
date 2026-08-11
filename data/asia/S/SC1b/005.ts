import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "赫拉克羅斯"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'zh-tw': "手腳上的利爪會深深插入地面或樹幹，因此在用引以為傲的角將對手扔出去時，能夠用爪子牢牢抓穩。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "推倒"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "怪力角擊"
		},

		damage: 110,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
