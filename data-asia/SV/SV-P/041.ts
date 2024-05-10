import { Card } from "../../../interfaces"
import Set from "../SV-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "浩大鯨"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	description: {
		'zh-tw': "迴游在冰雪地帶的寶可夢。會用強韌的肌肉和厚實的 皮下脂肪保護自己的身體。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "雪崩"
		},

		effect: {
			'zh-tw': "對手的所有備戰寶可夢也各受到10點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 30,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "回轉滑梯"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×100點傷害。"
		},

		damage: "100×",
		cost: ["Water", "Water", "Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card