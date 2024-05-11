import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "櫻花魚"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "會吸取獵物的體液。剩下的肉會沉入海底，成為其他寶可夢的食物。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "連擊消弭"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，對手的場上「連擊」寶可夢的特性全部消除。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "吸取之吻"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		},

		damage: 50,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card