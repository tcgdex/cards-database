import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Eevee",
		'de-de': "Evoli"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [133],

	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Smash Kick",
				'de-de': "Schmetterkick"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'de-de': "Bodycheck"
			},
			effect: {
				'en-us': "Eevee does 10 damage to itself.",
				'de-de': "Evoli fügt sich selber 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 85077,
				cardmarket: 275312
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 85077,
				cardmarket: 275312
			},
		},
	],
}

export default card
