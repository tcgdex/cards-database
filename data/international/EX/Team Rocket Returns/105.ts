import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Rocket's Suicune ex",
		'de-de': "Rockets Suicune ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		245,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Dark and Clear",
				'de-de': "Dark and Clear"
			},
			effect: {
				'en-us': "As long as Rocket's Suicune ex has any Darkness Energy attached to it, Rocket's Suicune ex can't be affected by any Special Conditions.\"",
				'de-de': "As long as Rocket's Suicune ex has any  Energy attached to it, Rocket's Suicune ex can't be affected by any Special Conditions."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Icy Wind",
				'de-de': "Icy Wind"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'de-de': "The Defending Pokémon is now Asleep."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Splash",
				'de-de': "Hyper Splash"
			},
			effect: {
				'en-us': "If the Defending Pokémon is a Stage 2 Evolved Pokémon, this attack does 50 damage plus 40 more damage.",
				'de-de': "If the Defending Pokémon is a Stage 2 Evolved Pokémon this attack does 50 damage plus 40 more damage."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276397,
				tcgplayer: 88797
			},
		},
	],

}

export default card
