import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Steelix",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		208,
	],
	hp: 100,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Onix",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Earth Rift",
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness or Resistance for Benched Pokémon.) Then, flip a coin. If tails, this attack can't be used during your next turn.",
			},
			damage: 10,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Iron Smash",
			},
			effect: {
				en: "Flip 2 coins. If both are heads, this attack does 50 damage plus 20 more damage. If both are tails, this attack does nothing. If 1 is heads and 1 is tails, this attack just does 50 damage.",
			},
			damage: 50,

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
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
