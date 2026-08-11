import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Abra",
		'de-de': "Abra"
	},

	illustrator: "Keiko Fukuyama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [63],

	hp: 40,

	types: [
		"Psychic"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Psychoflow",
				'de-de': "Psychofluss"
			},
			effect: {
				'en-us': "As long as there is a Psychic Energy card attached to Abra, its Retreat Cost is 0.",
				'de-de': "Solange mindestens eine -Energiekarte an Abra angelegt ist, betragen seine Rückzugskosten 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'de-de': "Kopfnuss"
			},

			damage: 20,

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
				tcgplayer: 83444,
				cardmarket: 275304
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 83444,
				cardmarket: 275304
			},
		},
	],
}

export default card
