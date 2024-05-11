import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷吉奇卡斯"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		'zh-tw': "在世上流傳著的傳說中，牠拉動了被繩子所綑綁的大地。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "暖身"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張基本能量卡，附於這隻寶可夢身上。"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "雙重衝擊"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×120點傷害。"
		},

		damage: "120×",
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card