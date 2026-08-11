import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Gulpin",
		'fr-fr': "Gloupti",
		'de-de': "Schluppuck"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [316],

	hp: 50,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Yawn",
				'fr-fr': "Baillement",
				'de-de': "Yawn"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "The Defending Pokémon is now Asleep."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Spit Poison",
				'fr-fr': "Crache-venin",
				'de-de': "Spit Poison"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "The Defending Pokémon is now Poisoned."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85974,
				cardmarket: 276136
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85974,
				cardmarket: 276136
			}
		},
	]
}

export default card
