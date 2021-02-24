import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Rayquaza Star",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		384,
	],
	hp: 90,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
				"Lightning",
			],
			name: {
				en: "Spiral Rush",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Holy Star",
			},
			effect: {
				en: "Discard all Energy cards attached to Rayquaza Star. This attack does 100 damage to each of your opponent's Pokémon-ex. (Don't apply Weakness and Resistance for Benched Pokémon.)",
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
			type: "Water",
			value: "-30"
		},
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
