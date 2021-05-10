import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Drednaw VMAX",
	},

	illustrator: "aky CG Works",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 320,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Drednaw V",
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Solid Shell",
			},
			effect: {
				en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "G-Max Headbutt",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 80 more damage.",
			},
			damage: "160+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D"
}

export default card
