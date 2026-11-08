import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Oddish",
		'fr-fr': "Mystherbe",
		'de-de': "Myrapla"
	},

	illustrator: 'Masako Yamashita',
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [43],

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
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Sleep Seed",
				'fr-fr': "Graine dodo",
				'de-de': "Schlafsamen"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 10,

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
				tcgplayer: 87840,
				cardmarket: 274997
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87840,
				cardmarket: 274997
			},
		},
	],
}

export default card
