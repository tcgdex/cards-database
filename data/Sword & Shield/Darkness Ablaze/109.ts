import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Zweilous",
	},
	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 100,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Deino",
	},



	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Corkscrew Punch",
			},

			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Darkness Fang",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
