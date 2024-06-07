import { Card } from "../../../interfaces"
import Set from "../SCA"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "百變怪V"
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 170,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "V變化"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用1次。從自己的棄牌區選擇1張【基礎】寶可夢的「寶可夢【V】」卡，與這隻寶可夢互換（所附加的卡・傷害指示物・特殊狀態・效果等全部保留）。將這隻寶可夢丟棄。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "輕黏"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張基本能量卡，附於這隻寶可夢身上。"
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card