import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Raichu",
	},
	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		26,
	],
	hp: 80,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Pikachu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Zzzap",
			},
			effect: {
				en: "This attack does 20 damage to each Pokémon with a Poké",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lightning Storm",
			},
			effect: {
				en: "Flip a coin. If tails, put 2 damage counters on Raichu.",
			},
			damage: 50,

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
