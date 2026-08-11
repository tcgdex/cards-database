import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Slugma",
		'de-de': "Schneckmag"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		218,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Singe",
				'de-de': "Singe"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Burned.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Burned."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heat Tackle",
				'de-de': "Heat Tackle"
			},
			effect: {
				'en-us': "Slugma does 10 damage to itself.",
				'de-de': "Slugma does 10 damage to itself."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 2,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276369,
				tcgplayer: 89341
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276369,
				tcgplayer: 89341
			},
		},
	],

}

export default card

