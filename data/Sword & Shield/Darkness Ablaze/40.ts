import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Relicanth",
	},
	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 90,
	types: [
		"Water",
	],




	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fossil Search",
			},
			effect: {
				en: "Search your deck for up to 2 Rare Fossil cards and put them onto your Bench. Then, shuffle your deck.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Surf",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
