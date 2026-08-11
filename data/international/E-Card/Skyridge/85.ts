import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Pineco",
		'de-de': "Tannza"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [204],

	hp: 40,

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
				'en-us': "Surprise Attack",
				'de-de': "Überraschungsangriff"
			},

			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'de-de': "Wirf eine Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},

			damage: 20,
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 88124,
				cardmarket: 275343
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 88124,
				cardmarket: 275343
			},
		},
	],
}

export default card
