import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Torchic ☆",
		'de-de': "Flemmli ☆"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		255,
	],

	hp: 70,

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
				'en-us': "Fireworks",
				'de-de': "Firworks"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard a Fire Energy card attached to Torchic ☆.",
				'de-de': "Flip a coin. If tails, discard a Fire Energy card attached to Torchic ☆."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Spring Back",
				'de-de': "Spring Back"
			},
			effect: {
				'en-us': "If your opponent has only 1 Prize card left, this attack does 20 damage plus 50 more damage and the Defending Pokémon is now Confused.",
				'de-de': "If your opponent has only 1 Prize card left, this atack does 20 damage plus 50 more damage and the Defending Pokémon is now Confused."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89965
			},
		},
	],

}

export default card
