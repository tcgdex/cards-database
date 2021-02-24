import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Nidoran♀",
	},
	illustrator: "Masako Yamashita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		29,
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
				en: "Call for Family",
			},
			effect: {
				en: "Search your deck for a Basic Pokémon card named Nidoran M or Nidoran F and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your bench is full.)",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Scratch",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
