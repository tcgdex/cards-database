import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Magnemite",
	},
	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		81,
	],
	hp: 40,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Lock-on",
			},
			effect: {
				en: "During your next turn, treat any tails flipped when using Magnemite's Electric Bolt attack on the Defending Pokémon as if they were heads. (Benching or evolving either Pokémon ends this effect.)",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electric Bolt",
			},
			effect: {
				en: "Flip 2 coins. If both are heads, the Defending Pokémon is now Paralyzed. If either of them is tails, this attack does nothing (not even damage).",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
