import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "騎士蝸牛"
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "奇跡鎧甲"
		},

		effect: {
			'zh-tw': "這隻寶可夢受到對手的「寶可夢【V】」招式的傷害「-100」點。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "長槍"
		},

		effect: {
			'zh-tw': "對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 90,
		cost: ["Metal", "Colorless", "Colorless"]
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
	regulationMark: "F"
}

export default card