import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Arbok",
		fr: "Arbok"
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
		fr: "Abo"
	},



	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sharp Fang",
				fr: "Croc Aiguisé"
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
				fr: "Coud’ Queue Sec"
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
