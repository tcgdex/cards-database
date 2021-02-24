import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Ivysaur",
	},
	illustrator: "Hisao Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		2,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Bulbasaur",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stretch Vine",
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sharp Leaf",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage.",
			},
			damage: 40,

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
