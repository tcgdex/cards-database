import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Lickitung δ",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		108,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Lap Up",
			},
			effect: {
				en: "Draw 2 cards.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Delta Mind",
			},
			effect: {
				en: "Put 1 damage counter on 1 of your opponent's Pokémon. If that Pokémon has δ on its card, put 3 damage counters instead.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
