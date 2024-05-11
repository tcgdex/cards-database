import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "起源帕路奇亞VSTAR"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 280,
	types: ["Water"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "星星入口"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用。從自己的棄牌區選擇最多3張【水】能量卡，以任意方式附於自己的【水】寶可夢身上。[對戰中，己方只可使用1次【VSTAR】力量。]"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "亞空潮漩"
		},

		effect: {
			'zh-tw': "增加雙方的備戰寶可夢的數量×20點傷害。"
		},

		damage: "60+",
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card