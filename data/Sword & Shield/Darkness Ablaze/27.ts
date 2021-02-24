import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Simisear",
	},
	illustrator: "0313",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 100,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Pansear",
	},



	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Flare",
			},

			damage: 30,

		},
		{
			cost: [
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
			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
