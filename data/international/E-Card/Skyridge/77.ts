import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Mantine",
		'de-de': "Mantax"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [226],

	hp: 60,

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
				'en-us': "Fin Smack",
				'de-de': "Flossenknaller"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "10×",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Sonic",
				'de-de': "Wassersonar"
			},
			effect: {
				'en-us': "Don't apply Resistance.",
				'de-de': "Wende keine Resistenz an."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87181,
				cardmarket: 275335
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87181,
				cardmarket: 275335
			},
		},
	],
}

export default card
