import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Kakuna",
	},
	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		14,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Weedle",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Secrete Poison",
			},
			effect: {
				en: "During your opponent's next turn, whenever your opponent's attack damages Kakuna (even if Kakuna is knocked out), your opponent's Active Pokémon is now Poisoned and Kakuna does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
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
