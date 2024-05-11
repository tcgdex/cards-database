import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "美納斯"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		'zh-tw': "也被稱為是最美的寶可夢。一直以來為無數的藝術家提供了靈感。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "水箭"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢受到50點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "柔和波"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		},

		damage: 60,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card