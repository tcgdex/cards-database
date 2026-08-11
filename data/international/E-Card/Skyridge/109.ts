import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Teddiursa",
		'de-de': "Teddiursa"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [216],

	hp: 40,

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
				'en-us': "Surprise Attack",
				'de-de': "Überraschungsangriff"
			},

			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'de-de': "Wirf eine Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},

			damage: 20,
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rage",
				'de-de': "Raserei"
			},
			effect: {
				'en-us': "This attack does 10 damage plus 10 more damage for each damage counter on Teddiursa.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte plus 10 zusätzliche Schadenspunkte für jede Schadensmarke auf Teddiursa zu."
			},
			damage: "10+",

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
				tcgplayer: 89856,
				cardmarket: 275367
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 89856,
				cardmarket: 275367
			},
		},
	],
}

export default card
