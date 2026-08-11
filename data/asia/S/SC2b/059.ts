import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷吉洛克"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'zh-tw': "最近的研究發現，構成牠身體的岩石全都是從不同的土地裡挖掘出來的。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "巨岩墜落"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算抵抗力。"
		},

		damage: 40,
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "百萬噸墜落"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 130,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
