import { Card } from "../../../interfaces"
import Set from "../svEL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鴨嘴炎獸"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'zh-tw': "長久棲息在火山口，使得牠的身體變得像是一座火山， 甚至擁有類似岩漿庫的器官。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "火焰"
		},

		damage: 40,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "火山高溫"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 170,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card