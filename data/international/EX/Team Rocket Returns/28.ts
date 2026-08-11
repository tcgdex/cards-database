import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Yanma",
		'de-de': "Yanma"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		193,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Quick Charge",
				'de-de': "Quick Charge"
			},
			effect: {
				'en-us': "Search your deck for up to 4 different types of basic Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				'de-de': "Search your deck for up 4 different types of basic Energy cards, show then to your opponent, and put them into your hand. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Swift",
				'de-de': "Swift"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				'de-de': "This attack's damage isn't affected by Weakness, resistance, Poke-Powers, Poke-Bodies, or any other effects on the Defending Pokémon."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276320,
				tcgplayer: 90683
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276320,
				tcgplayer: 90683
			},
		},
	],

}

export default card

