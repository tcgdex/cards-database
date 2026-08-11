import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "詐唬魔"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		'zh-tw': "會先裝成要下跪道歉的樣子，然後用後腦勺尖如長矛的頭髮刺向對手。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "咬住"
		},

		damage: 30,
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "假跪真撞"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。"
		},

		damage: 60,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card