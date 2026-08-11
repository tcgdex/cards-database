import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "謝米"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'zh-tw': "當人們欣喜於嚴冬隨著季節輪轉而終結， 向上天奉獻感謝之意時，此寶可夢就會 現身，令荒寂的大地開滿鮮花。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "晴光之禮"
		},

		effect: {
			'zh-tw': "這個招式只可在後攻玩家的最初回合使用。從自己的牌庫任意選擇最多3張卡加入手牌。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "活蹦亂跳"
		},

		damage: 30,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card