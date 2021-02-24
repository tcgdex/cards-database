import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Escavalier",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 120,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Karrablast",
	},



	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Fury Cutter",
			},
			effect: {
				en: "Flip 3 coins. If 1 of them is heads, this attack does 20 more damage. If 2 of them are heads, this attack does 70 more damage. If all of them are heads, this attack does 140 more damage.",
			},
			damage: "10+",

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Seashell Attack",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 2,



}

export default card
