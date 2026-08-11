import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Weedle",
		'de-de': "Hornliu"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [13],

	hp: 50,

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
				'en-us': "Entangling Thread",
				'de-de': "Einwickelnder Faden"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das verteidigende Pokémon jetzt gelähmt."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Poison Horn",
				'de-de': "Gifthorn"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das verteidigende Pokémon jetzt vergiftet."
			},

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
				tcgplayer: 90541,
				cardmarket: 275373
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 90541,
				cardmarket: 275373
			},
		},
	],
}

export default card
