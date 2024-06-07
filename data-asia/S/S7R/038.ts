import { Card } from "../../../interfaces"
import Set from "../S7R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "念力土偶"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'zh-tw': "似乎是從古代人做的泥偶誕生而來的寶可夢。能靠念力飄浮在空中移動。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "高速旋轉"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。然後，對手將對手自己的戰鬥寶可夢與備戰寶可夢互換。"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "古代刻印"
		},

		effect: {
			'zh-tw': "在對手的戰鬥寶可夢身上放置傷害指示物直到剩餘HP變為「60」為止。"
		},

		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card