import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Dracozolt",
	},

	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 160,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Rare Fossil",
	},

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Amping Up",
			},
			effect: {
				en: "During your next turn, this Pokémon’s Amping Up attack does 90 more damage (before applying Weakness and Resistance).",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giga Impact",
			},
			effect: {
				en: "During your next turn, this Pokémon can’t attack.",
			},
			damage: 200,

		},
	],

	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D"
}

export default card
