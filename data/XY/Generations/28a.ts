import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Jolteon-EX",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		135,
	],
	hp: 160,
	types: [
		"Lightning",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Swift",
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, or any other effects on your opponent's Active Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flash Ray",
			},
			effect: {
				en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],




}

export default card
