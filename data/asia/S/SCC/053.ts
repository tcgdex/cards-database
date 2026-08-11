import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "白馬蕾冠王V"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "暴風雪"
		},

		effect: {
			'zh-tw': "對手的所有備戰寶可夢也各受到10點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 40,
		cost: ["Water", "Colorless"]
	}, {
		name: {
			'zh-tw': "冰霜踩踏"
		},

		damage: 140,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card