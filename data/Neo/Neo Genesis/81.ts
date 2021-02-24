import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Totodile",
	},
	illustrator: "Hironobu Yoshida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		158,
	],
	hp: 50,
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
				en: "Leer",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't attack Totodile during your opponent's next turn. (Benching or evolving either Pokémon ends this effect.)",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Fury Swipes",
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
