import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "怪力"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 170,
	types: ["Fighting"],

	description: {
		'zh-tw': "能夠迅速活動４隻手臂，從各種角度毫不停歇地使出拳擊或手刀。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "肌肉報復"
		},

		effect: {
			'zh-tw': "造成自己的棄牌區的【鬥】寶可夢的張數×20點傷害。"
		},

		damage: "20×",
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "炸藥拳"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到50點傷害。"
		},

		damage: 200,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card