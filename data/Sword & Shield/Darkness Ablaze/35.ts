import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Galarian Mr. Mime",
	},
	illustrator: "Misa Tsutsui",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 80,
	types: [
		"Water",
	],




	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Reflect",
			},
			effect: {
				en: "During your opponent’s next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Icy Snow",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
