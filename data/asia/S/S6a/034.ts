import { Card } from "../../../interfaces"
import Set from "../S6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "麻麻鰻魚王"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	description: {
		'zh-tw': "用手臂的力量從大海裡爬出，襲擊水邊的獵物。會瞬間將獵物拖入海中。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "衝天擊"
		},

		effect: {
			'zh-tw': "在這個回合，若這隻寶可夢從「麻麻鰻」進化，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 40,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "瘋狂伏特"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 160,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card