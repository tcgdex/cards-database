import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "美納斯"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		'zh-tw': "也被稱為是最美的寶可夢。一直以來為無數的藝術家提供了靈感。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "光明治癒"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。將自己的所有寶可夢各恢復「20」HP。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "衝浪"
		},

		damage: 80,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card