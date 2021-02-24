import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Galarian Darmanitan",
	},
	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 140,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Galarian Darumaka",
	},



	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Headbutt",
			},

			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Frozen Heat",
			},
			effect: {
				en: "You may discard all Water Energy from this Pokémon. If you do, this attack does 60 more damage.",
			},
			damage: "110+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
