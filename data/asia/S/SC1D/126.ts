import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雙劍鞘"
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		'zh-tw': "進化之後變成了雙胞胎。用互相摩擦劍刃發出的聲音來威嚇對手。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "劈開"
		},

		damage: 30,
		cost: ["Metal", "Colorless"]
	}, {
		name: {
			'zh-tw': "二連斬"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×80點傷害。"
		},

		damage: "80×",
		cost: ["Metal", "Metal", "Colorless"]
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
	regulationMark: "D"
}

export default card
