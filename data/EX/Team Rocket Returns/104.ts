import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Rocket's Snorlax ex",
		de: "Rockets Relaxo ex"
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

	suffix: "EX",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dark Healer",
				de: "Dark Healer"
			},
			effect: {
				en: "As long as Rocket's Snorlax ex has any Darkness Energy attached to it, remove 1 damage counter from Rocket's Snorlax ex between turns.\"",
				de: "As long as Rocket's Snorlax ex has any  Energy attached to it, remove 1 damage counter from Rocket's Snorlax ex between turns."
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
				en: "Poison Claws",
				de: "Poison Claws"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Poisoned."
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
				en: "Collapse",
				de: "Collapse"
			},
			effect: {
				en: "Rocket's Snorlax ex is now Asleep.",
				de: "Rocket's Snorlax ex is now Asleep."
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

	thirdParty: {
		cardmarket: 276396,
		tcgplayer: 88796
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
