import { Card } from "../../../interfaces"
import Set from "../SVP1"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "布土撥"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'zh-tw': "使用的格鬥技非常獨特，會一邊用手掌給予打擊， 並一邊用肉球施放電擊。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "電擊"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "伏特頭擊"
		},

		damage: 70,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card