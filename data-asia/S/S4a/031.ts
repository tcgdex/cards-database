import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "拉普拉斯V"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "迴流"
		},

		effect: {
			'zh-tw': "從自己的手牌選擇1張【水】能量卡，附於這隻寶可夢身上。然後，將這隻寶可夢與備戰寶可夢互換。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "大洋閉環"
		},

		effect: {
			'zh-tw': "選擇2個這隻寶可夢身上附加的【水】能量，放回手牌。"
		},

		damage: 210,
		cost: ["Water", "Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card