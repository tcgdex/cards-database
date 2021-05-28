import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Marowak",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		105,
	],
	hp: 70,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Cubone",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Triple Bone",
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon. Flip 3 coins. This attack does 10 damage times the number of heads to that Pokémon. Don't apply Weakness and Resistance.",
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bone Rush",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 50 damage times the number of heads.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],




}

export default card
