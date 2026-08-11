import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Electrike",
		'de-de': "Frizelbliz"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [309],
	
	hp: 60,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Zap Kick",
				'de-de': "Stromtritt"
			},

			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunder Jolt",
				'de-de': "Donnerrüttler"
			},
			effect: {
				'en-us': "Flip a coin. If tails, Electrike does 10 damage to itself.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" fügt Frizelbliz sich selbst 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Using electricity stored in its fur, it stimulates its muscles to heighten its reaction speed."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85142,
				cardmarket: 278934
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278934,
				tcgplayer: 85142
			}
		},
	],

}

export default card
