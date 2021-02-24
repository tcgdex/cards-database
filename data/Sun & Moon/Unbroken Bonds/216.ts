import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Venomoth",
	},
	illustrator: "Mina Nakai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		49,
	],
	hp: 90,
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
			],
			name: {
				en: "Assassin Flight",
			},
			effect: {
				en: "You can use this attack only if your opponent's Active Pokémon is affected by a Special Condition. This attack does 90 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Powder",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned.",
			},
			damage: 30,

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
