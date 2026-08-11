import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨沼怪"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "沼泥製造者"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的手牌選擇1張【水】或者【鬥】能量卡，附於自己的寶可夢身上。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "地震"
		},

		effect: {
			'zh-tw': "自己的所有備戰寶可夢也各受到20點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 180,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card