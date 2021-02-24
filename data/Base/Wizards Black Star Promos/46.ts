import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Electabuzz",
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		125,
	],
	hp: 60,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Lightning Rod",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon and put a Lightning Rod marker on it. (A Pokémon can have only 1 Lightning Rod marker on it at a time.)",
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Lightning Bolt",
			},
			effect: {
				en: "This attack does 20 damage to any Pokémon with a Lightning Rod counter on it. Apply Weakness and Resistance.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
