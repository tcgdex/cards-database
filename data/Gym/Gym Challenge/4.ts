import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Erika's Venusaur",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare Holo",
	category: "Pokemon",

	set: Set,
	dexId: [
		3,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Ivysaur",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Growth",
			},
			effect: {
				en: "Flip a coin. If heads, you may attach up to 2 Energy cards from your hand to Erika's Venusaur.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Wide Solarbeam",
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 2 of them (or 1 if he or she has only 1). This attack does 20 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
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





}

export default card
