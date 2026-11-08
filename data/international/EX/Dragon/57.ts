import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Grimer",
		'fr-fr': "Tadmorv",
		'de-de': "Sleima"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [88],

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
				'en-us': "Pound",
				'fr-fr': "Écras'face",
				'de-de': "Pound"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Poison Spurt",
				'fr-fr': "Jet de poison",
				'de-de': "Poison Spurt"
			},
			effect: {
				'en-us': "Discard a Grass Energy card attached to Grimer. The Defending Pokémon is now Poisoned.",
				'fr-fr': "Défaussez une carte Énergie  attachée à Tadmorv. Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Discard a  Energy card attached to Grimer. The Defending Pokémon is now Poisoned."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85908,
				cardmarket: 275934
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85908,
				cardmarket: 275934
			},
		},
	],

}

export default card
