import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Ivysaur",
		'fr-fr': "Herbizarre",
		'de-de': "Bisaknosp"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		2,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Bulbasaur",
		'fr-fr': "Bulbizarre"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Poison Seed",
				'fr-fr': "Graine poison",
				'de-de': "Poison Seed"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "The Defending Pokémon is now Poisoned."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch'herbe",
				'de-de': "Razor Leaf"
			},

			damage: 50,

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
				cardmarket: 276211,
				tcgplayer: 86297
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276211,
				tcgplayer: 86297
			},
		}
	],
}

export default card
