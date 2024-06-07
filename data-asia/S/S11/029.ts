import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "酋雷姆V"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "急遽冰凍"
		},

		effect: {
			'zh-tw': "從自己的手牌選擇任意數量的【水】能量卡，以任意方式附於自己的寶可夢身上。"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "冰霜粉碎"
		},

		damage: 140,
		cost: ["Water", "Water", "Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card