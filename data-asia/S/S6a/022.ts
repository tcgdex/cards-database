import { Card } from "../../../interfaces"
import Set from "../S6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "醜醜魚"
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		'zh-tw': "雖然看起來弱小又醜陋，但擁有頑強的生命力，只要少量的水就能存活。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "躍動"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×10點傷害。"
		},

		damage: "10×",
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card