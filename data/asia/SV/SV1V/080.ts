import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ノノクラゲ"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	dexId: [948],
	hp: 50,
	types: ["Grass"],

	description: {
		'ja-jp': "メノクラゲに 似ているが まったく 別の 種類。 脚は 細いが 走りだせば 時速５０キロになる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'ja-jp': "みだれげり"
		},

		damage: "10×",

		effect: {
			'ja-jp': "コインを3回投げ、オモテの数×10ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693155,
				tcgplayer: 568306,
			},
		},
	],

	retreat: 1
}

export default card