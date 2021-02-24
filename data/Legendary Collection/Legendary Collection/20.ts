import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Beedrill",
	},
	illustrator: "Ken Sugimori",
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
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Twineedle",
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Poison Sting",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
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
