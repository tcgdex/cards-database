import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Rayquaza",
		'fr-fr': "Rayquaza",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Promo",
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
				'en-us': "Dual Claw",
				'fr-fr': "Paire de Griffes",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
			},
			damage: "20×",

		},
		{
			cost: [
				"Fire",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Blast",
				'fr-fr': "Explo-Draco",
			},
			effect: {
				'en-us': "Discard 1 Fire Energy and 1 Lightning Energy attached to this Pokémon.",
				'fr-fr': "Défaussez 1 Énergie Fire et 1 Énergie Lightning attachées à ce Pokémon.",
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

	description: {
		'en-us': "It flies in the ozone layer, way up high in the sky. Until recently, no one had ever seen it.",
	},

	thirdParty: {
		cardmarket: 289722
	}
}

export default card
