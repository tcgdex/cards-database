import { Card } from "../../../interfaces"
import Set from "../S8a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "帝牙盧卡"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'zh-tw': "擁有操縱時間的力量。在神奧地區被稱為神，並在神話中登場。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "時空逆流"
		},

		effect: {
			'zh-tw': "從自己的棄牌區任意選擇1張卡，在給對手看過後加入手牌。"
		},

		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "金屬爆破"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上附加的【鋼】能量的數量×20點傷害。"
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card