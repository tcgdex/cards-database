import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Venomoth",
	},
	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		49,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Venonat",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Healing Dust",
			},
			effect: {
				en: "Flip 2 coins. For each heads, remove 1 damage counter from each of your Pokémon. If a Pokémon has fewer damage counters than the number of heads, remove all of them.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Miracle Powder",
			},
			effect: {
				en: "Flip a coin. If heads, choose a Special Condition (Asleep, Burned, Confused, Paralyzed, or Poisoned). The Defending Pokémon is now affected by that Special Condition.",
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
