import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "狙射樹梟"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		'zh-tw': "會像射箭那樣射出藏在自己翅膀裡的箭羽。只要瞄準目標就絕不會射偏。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "密林迷彩"
		},

		effect: {
			'zh-tw': "這隻寶可夢不會受到對手的「寶可夢【V】・【GX】」招式的傷害。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "分岔箭"
		},

		effect: {
			'zh-tw': "對手的2隻備戰寶可夢也各受到20點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 90,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
