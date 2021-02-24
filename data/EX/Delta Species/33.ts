import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Weezing",
	},
	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		110,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Koffing",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Body Odor",
			},
			effect: {
				en: "As long as Weezing is the Active Pokémon, put 1 damage counter on each of your opponent's Pokémon that has any Poké-Bodies between turns.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Mist Attack",
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sludge Whirlpool",
			},

			damage: 50,

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
