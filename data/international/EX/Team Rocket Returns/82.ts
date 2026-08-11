import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Zubat",
		'de-de': "Zubat"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		41,
	],

	hp: 50,

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
				'en-us': "Dark Streak",
				'de-de': "Dark Streak"
			},
			effect: {
				'en-us': "Flip a coin. If heads, each Defending Pokémon is now Paralyzed.",
				'de-de': "Flip a coin. If heads, each Defending Pokémon is now Paralyzed."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Ambush",
				'de-de': "Ambush"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
				'de-de': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276374,
				tcgplayer: 90771
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276374,
				tcgplayer: 90771
			},
		},
	],

}

export default card

