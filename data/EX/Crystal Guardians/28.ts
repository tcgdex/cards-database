import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Venusaur",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		3,
	],
	hp: 110,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Ivysaur",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Chlorophyll",
			},
			effect: {
				en: "All Energy cards that provide only Colorless Energy attached to your Grass Pokémon provide Grass Energy instead.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Green Blast",
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Grass Energy attached to all of your Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Toxic Sleep",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep and Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
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
