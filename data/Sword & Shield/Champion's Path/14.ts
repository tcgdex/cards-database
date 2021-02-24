import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Drednaw V",
	},
	illustrator: "aky CG Works",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 210,
	types: [
		"Water",
	],



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
				en: "Powerful Bite",
			},
			effect: {
				en: "During your opponent’s next turn, the Defending Pokémon can’t retreat.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
