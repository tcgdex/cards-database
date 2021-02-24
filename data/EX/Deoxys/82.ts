import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Wurmple",
	},
	illustrator: "Kagemaru Himeno",
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
				en: "Ascension",
			},
			effect: {
				en: "Search your deck for a card that evolves from Wurmple and put it on Wurmple. (This counts as evolving Wurmple.) Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Miracle Essence",
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 Special Condition. Each Defending Pokémon is now affected by that Special Condition.",
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
