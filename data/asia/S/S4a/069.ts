import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鬼斯"
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "從氣體中誕生的生命體。若被牠那有毒氣體形成的身體裹住，不管是誰都會昏迷。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "憑空消失"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與附加的卡，全部放回手牌。"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card