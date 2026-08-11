import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Nidorina",
		'de-de': "Nidorina"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [30],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Nidoran♀",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'de-de': "Tackle"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],

			name: {
				'en-us': "Poison Claws",
				'de-de': "Giftkrallen"
			},

			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das verteidigende Pokémon jetzt vergiftet."
			},

			damage: 30,
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87734,
				cardmarket: 275341
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87734,
				cardmarket: 275341
			},
		},
	],
}

export default card
