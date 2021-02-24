import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Beedrill",
	},
	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		15,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Kakuna",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Triple Poison",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. Your opponent now puts 3 damage counters instead of 1 after each player's turn (even if it was already Poisoned).",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Pin Missile",
			},
			effect: {
				en: "Flip 4 coins. This attack does 20 times the number of heads.",
			},

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
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
