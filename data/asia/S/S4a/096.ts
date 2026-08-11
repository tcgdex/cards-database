import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨炭山"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	description: {
		'zh-tw': "平時性情溫和，但在人類破壞礦山時會大發雷霆，用１５００度的大火將他們燒盡。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "瀝青熱焰"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的棄牌區選擇【火】能量卡與【鬥】能量卡最多各1張，以任意方式附於自己的寶可夢身上。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "炭崩"
		},

		damage: 130,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card