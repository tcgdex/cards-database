import { Card } from "../../../interfaces"
import Set from "../S6K"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "飄浮泡泡 雨水的樣子"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "飄浮泡泡被雨淋到時的樣子。在讓牠淋浴的實驗裡，牠並沒有變成這種形態。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "看天"
		},

		effect: {
			'zh-tw': "若自己的棄牌區有8張以上的「競技場」卡，則這隻寶可夢使用招式所需的能量全部消除。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "雨流浴"
		},

		effect: {
			'zh-tw': "對手的所有寶可夢各受到20點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "E"
}

export default card