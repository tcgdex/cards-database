import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Pineco",
		'de-de': "Tannza"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [204],

	hp: 50,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Double-edge",
				'de-de': "Risikotackle"
			},
			effect: {
				'en-us': "Pineco does 10 damage to itself.",
				'de-de': "Tannza fügt sich selber 10 Schadenspunkte zu."
			},
			damage: 30,

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
				tcgplayer: 88125,
				cardmarket: 275344
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 88125,
				cardmarket: 275344
			},
		},
	],
}

export default card
