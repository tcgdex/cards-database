import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "羅絲雷朵"
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'zh-tw': "會用馥郁芬芳的花香迷惑敵人，並用荊棘上的鞭子猛力抽打對方。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "麻痺毒"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。擲1次硬幣若為正面，則再將其【麻痺】。"
		},

		damage: 30,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "超級吸取"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		},

		damage: 90,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
