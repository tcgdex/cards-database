import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Rayquaza",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		384,
	],
	hp: 80,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Dance",
			},
			effect: {
				en: "During your next turn, if any of your current Active Pokémon does damage to any Defending Pokémon, the attack does 30 more damage (before applying Weakness and Resistance).",
			},

		},
		{
			cost: [
				"Fire",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Dragon Claw",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],





}

export default card
