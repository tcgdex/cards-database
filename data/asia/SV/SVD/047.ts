import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮皮"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "因可愛的舉止和叫聲而廣受歡迎的寶可夢。 不過很少被人發現。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "二連巴掌"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×30點傷害。"
		},

		damage: "30×",
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card