import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Vaporeon",
		'fr-fr': "Aquali",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		134,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Bubble Drain",
				'fr-fr': "Vide Bulle",
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Clean, clear waters are its usual habitat. When it's about to be attacked by an invading enemy, it dives into the water to hide.",
	},

	thirdParty: {
		cardmarket: 396607,
		tcgplayer: 197662
	}
}

export default card
