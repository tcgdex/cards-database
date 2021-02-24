import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Dartrix",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Rowlet",
	},



	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Razor Leaf",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
