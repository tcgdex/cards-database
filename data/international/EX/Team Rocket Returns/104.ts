import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Rocket's Snorlax ex",
		'de-de': "Rockets Relaxo ex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		143,
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
				'en-us': "Dark Healer",
				'de-de': "Dark Healer"
			},
			effect: {
				'en-us': "As long as Rocket's Snorlax ex has any Darkness Energy attached to it, remove 1 damage counter from Rocket's Snorlax ex between turns.\"",
				'de-de': "As long as Rocket's Snorlax ex has any  Energy attached to it, remove 1 damage counter from Rocket's Snorlax ex between turns."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Claws",
				'de-de': "Poison Claws"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Poisoned."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Collapse",
				'de-de': "Collapse"
			},
			effect: {
				'en-us': "Rocket's Snorlax ex is now Asleep.",
				'de-de': "Rocket's Snorlax ex is now Asleep."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276396,
				tcgplayer: 88796
			},
		},
	],

}

export default card
