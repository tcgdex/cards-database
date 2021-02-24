import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Remoraid",
		fr: "Rémoraid",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		223,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ion Pool",
				fr: "Bassin Ionique",
			},
			effect: {
				en: "Discard any Stadium card in play.",
				fr: "Défaussez toute carte Stade en jeu.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
