import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Pelipper",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		279,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wingull",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Stockpile",
			},
			effect: {
				en: "During your next turn, Spit Up's base damage is 70 instead of 30, and Swallow's base damage is 60 instead of 20.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Spit Up",
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swallow",
			},
			effect: {
				en: "After your attack, remove from Pelipper the number of damage counters equal to the damage you did to the Defending Pokémon. If Pelipper has fewer damage counters than that, remove all of them.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
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
