import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "燈籠魚"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'zh-tw': "從鰭變化而來的觸手之中，分別流通著正電以及負電。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "誘導之光"
		},

		effect: {
			'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。"
		},

		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "光彈"
		},

		damage: 20,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
