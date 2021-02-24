import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Vibrava",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		329,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Trapinch",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Quick Charge",
			},
			effect: {
				en: "Search your deck for up to 3 different types of basic Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Grass",
				"Lightning",
			],
			name: {
				en: "Dragon Spark",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance to Benched Pokémon.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fire",
			value: "-30"
		},
		{
			type: "Lightning",
			value: "-30"
		},
	],




}

export default card
