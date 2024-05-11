import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "吼鯨王V"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 280,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "汲水"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多3張【水】能量卡，附於這隻寶可夢身上。"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "洋流"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×120點傷害。"
		},

		damage: "120×",
		cost: ["Water", "Water", "Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card
