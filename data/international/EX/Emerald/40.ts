import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Swalot",
		'fr-fr': "Avaltout",
		'de-de': "Schlukwech"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		317,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Gulpin",
		'fr-fr': "Gloupti"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Blot",
				'fr-fr': "Pâté",
				'de-de': "Blot"
			},
			effect: {
				'en-us': "Remove 1 damage counter from Swalot.",
				'fr-fr': "Retirez à Avaltout un marqueur de dégât.",
				'de-de': "Remove 1 damage counter from Swalot."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Breath",
				'fr-fr': "Haleine empoisonnée",
				'de-de': "Poisoned Breath"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "The Defending Pokémon is now Poisoned."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		tcgplayer: 89671,
		cardmarket: 276551
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89671,
				cardmarket: 276551
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 89671,
				cardmarket: 276551
			},
		}
	],
}

export default card
