import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "金魚王"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "到了秋天，體內的脂肪會因為要求偶而增加，體色也會變得非常漂亮。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "角剝"
		},

		effect: {
			'zh-tw': "擲3次硬幣，選擇與正面出現的次數相同數量的對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "突刺"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
