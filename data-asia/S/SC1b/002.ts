import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵甲蛹"
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'zh-tw': "正處於等待進化的狀態。除了變硬之外什麼都做不了，只能動也不動以免遭受攻擊。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "適應進化"
		},

		effect: {
			'zh-tw': "這隻寶可夢就算在自己的最初回合或者剛使出的回合，也可進化。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "衝撞"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
