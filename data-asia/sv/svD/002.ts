import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "赫拉克羅斯"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'zh-tw': "對甜甜蜜愛不釋手，為了全都佔為己有， 會用引以為傲的角扔飛對手。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撞擊"
		},

		damage: 50,
		cost: ["Grass", "Grass"]
	}, {
		name: {
			'zh-tw': "粉碎角擊"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算抵抗力。"
		},

		damage: 110,
		cost: ["Grass", "Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card