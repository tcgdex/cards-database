import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Carnivine G",
	},
	illustrator: "Makoto Imai",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		455,
	],
	hp: 80,
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
				en: "Power Whip",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage for each Energy attached to Carnivine  to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Grass Knot",
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Colorless Energy in the Defending Pokémon's Retreat Cost (after applying effects to the Retreat Cost).",
			},
			damage: 20,

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
			type: "Water",
			value: "-20"
		},
	],




}

export default card
