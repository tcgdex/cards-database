import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Seel",
		'de-de': "Jurob"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [86],

	hp: 50,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Cold Breath",
				'de-de': "Kalter Atem"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				'de-de': "Wirf eine Münze. Bei\"Kopf\" schläft das verteidigende Pokémon jetzt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 89050,
				cardmarket: 275352
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 89050,
				cardmarket: 275352
			},
		},
	],
}

export default card
