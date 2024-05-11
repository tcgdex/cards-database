import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伊布"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "由於不穩定的基因，蘊含著各式各樣進化可能性的特殊寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "準備"
		},

		effect: {
			'zh-tw': "從自己的手牌選擇1張基本能量卡，附於這隻寶可夢身上。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "咬住"
		},

		damage: 30,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card