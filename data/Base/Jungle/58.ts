import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Oddish",
	},
	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		43,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Stun Spore",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Sprout",
			},
			effect: {
				en: "Search your deck for a Basic Pokémon named Oddish and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
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
