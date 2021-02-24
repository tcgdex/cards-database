import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Luvdisc",
	},
	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		370,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Loving Draw",
			},
			effect: {
				en: "Draw cards until you have the same number of cards in your hand as your opponent has in his or her hand.",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Sweet Temptation",
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. This attack does 10 damage to the new Defending Pokémon.",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
