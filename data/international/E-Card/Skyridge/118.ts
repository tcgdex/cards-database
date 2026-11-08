import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Zubat",
		'de-de': "Zubat"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [41],

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
				'en-us': "Wing Attack",
				'de-de': "Flügelschlag"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Poison Spray",
				'de-de': "Giftspray"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'de-de': "Das verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 90769,
				cardmarket: 275376
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 90769,
				cardmarket: 275376
			},
		},
	],
}

export default card
