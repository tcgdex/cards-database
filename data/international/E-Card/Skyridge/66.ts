import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Houndour",
		'de-de': "Hunduster"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [228],

	hp: 50,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Retaliate",
				'de-de': "Vergeltung"
			},
			effect: {
				'en-us': "This attack does 10 damage times the number of damage counters on Houndour.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl an Schadensmarken auf Hunduster zu."
			},
			damage: "10×",

		},
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Fireworks",
				'de-de': "Feuerwerk"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard a Fire Energy card attached to Houndour.",
				'de-de': "Wirf eine Münze. Lege bei \"Zahl\" eine an Hunduster angelegte -Energiekarte auf deinen Ablagestapel."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 86220,
				cardmarket: 275324
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 86220,
				cardmarket: 275324
			},
		},
	],
}

export default card
