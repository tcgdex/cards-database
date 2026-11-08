import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Pheromosa",
		'fr-fr': "Cancrelove",
	},
	illustrator: "Mizue",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		795,
	],
	hp: 110,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "High Jump Kick",
				'fr-fr': "Pied Voltige",
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "White Ray",
				'fr-fr': "Rayon Blanc",
			},
			effect: {
				'en-us': "If you have only 1 Prize card remaining, this attack does 90 more damage.",
				'fr-fr': "S’il vous reste exactement 1 carte Récompense, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],






	description: {
		'en-us': "One of the Ultra Beasts. It refuses to touch anything, perhaps because it senses some uncleanness in this world.",
	},
}

export default card
