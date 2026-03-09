import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Rocket's Suicune ex",
		de: "Rockets Suicune ex"
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

	suffix: "EX",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dark and Clear",
				de: "Dark and Clear"
			},
			effect: {
				en: "As long as Rocket's Suicune ex has any Darkness Energy attached to it, Rocket's Suicune ex can't be affected by any Special Conditions.\"",
				de: "As long as Rocket's Suicune ex has any  Energy attached to it, Rocket's Suicune ex can't be affected by any Special Conditions."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Icy Wind",
				de: "Icy Wind"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				de: "The Defending Pokémon is now Asleep."
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
				en: "Hyper Splash",
				de: "Hyper Splash"
			},
			effect: {
				en: "If the Defending Pokémon is a Stage 2 Evolved Pokémon, this attack does 50 damage plus 40 more damage.",
				de: "If the Defending Pokémon is a Stage 2 Evolved Pokémon this attack does 50 damage plus 40 more damage."
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

	thirdParty: {
		cardmarket: 276397,
		tcgplayer: 88797
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
