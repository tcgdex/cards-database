import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Kadabra",
		'de-de': "Kadabra"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [64],

	hp: 70,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Abra",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Nightmare",
				'de-de': "Alptraum"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'de-de': "Das verteidigende Pokémon schläft jetzt."
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mind Shock",
				'de-de': "Verstandesschock"
			},
			effect: {
				'en-us': "Don't apply Weakness and Resistance.",
				'de-de': "Wende keine Schwäche oder Resistenz an."
			},
			damage: 40,

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
			type: 'normal',
			thirdParty: {
				tcgplayer: 86405,
				cardmarket: 275327
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 86405,
				cardmarket: 275327
			},
		},
	],
}

export default card
