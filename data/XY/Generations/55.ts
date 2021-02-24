import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Doduo",
		fr: "Doduo",
	},
	illustrator: "Eri Yamaki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		84,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Stab",
				fr: "Entaille Double",
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Doduo Delivery",
				fr: "Livraison Doduo",
			},
			effect: {
				en: "Draw 2 cards.",
				fr: "Piochez 2 cartes.",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
