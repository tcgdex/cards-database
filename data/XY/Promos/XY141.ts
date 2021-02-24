import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Rayquaza",
		fr: "Rayquaza",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		384,
	],
	hp: 120,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Dual Claw",
				fr: "Paire de Griffes",
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Blast",
				fr: "Explo-Draco",
			},
			effect: {
				en: "Discard 1 Fire Energy and 1 Lightning Energy attached to this Pokémon.",
				fr: "Défaussez 1 Énergie Fire et 1 Énergie Lightning attachées à ce Pokémon.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
