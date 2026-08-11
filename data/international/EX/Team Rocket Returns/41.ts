import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Dark Pupitar",
		'de-de': "Dunkles Pupitar"
	},

	illustrator: "Emi Miwa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		247,
	],

	hp: 80,

	types: [
		"Fighting",
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Larvitar",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
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
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rock Tumble",
				'de-de': "Rock Tumble"
			},
			effect: {
				'en-us': "This attack's damage is not affected by Resistance.",
				'de-de': "This attack's damage is not affected by Resistance."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276333,
				tcgplayer: 84644
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276333,
				tcgplayer: 84644
			},
		},
		{
			type: "normal",
			stamp: ["takashi-yoneda"],
			thirdParty: {
				cardmarket: 276333,
				tcgplayer: 276333
			},
		},
	],

}

export default card
