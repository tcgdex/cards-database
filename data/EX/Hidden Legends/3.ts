import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Crobat",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		169,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Golbat",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flutter Trick",
			},
			effect: {
				en: "Flip a coin. If heads, look at your opponent's hand and choose 1 card. Your opponent discards the card you chose.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Triple Poison",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. Put 3 damage counters instead of 1 on the Defending Pokémon between turns.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
