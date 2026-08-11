import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "狙射樹梟ex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 320,
	types: ["Grass"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "無拘無束"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用1次。將在備戰區的這隻寶可夢與戰鬥寶可夢互換。或者將在戰鬥場的這隻寶可夢與備戰寶可夢互換。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "狩獵箭"
		},

		effect: {
			'zh-tw': "對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 130,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card