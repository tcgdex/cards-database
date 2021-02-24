import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Mewtwo ex",
	},
	illustrator: "Katsura Tabata",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		150,
	],
	hp: 100,
	types: [
		"Psychic",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Energy Absorption",
			},
			effect: {
				en: "Attach up to 2 Energy cards from your discard pile to Mewtwo ex.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psyburn",
			},

			damage: 60,

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
