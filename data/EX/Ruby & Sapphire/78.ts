import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Wurmple",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		265,
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
				en: "Signs of Evolution",
			},
			effect: {
				en: "Search your deck for Silcoon and Beautifly, or Cascoon and Dustox cards. Show 1 card or both cards of a pair to your opponent and put them into your hand. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Barb",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
