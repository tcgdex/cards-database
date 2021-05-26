import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Arbok",
	},
	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 120,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Ekans",
	},



	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sharp Fang",
			},

			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Tail Snap",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
