import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Aegislash V",
	},
	illustrator: "aky CG Works",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 210,
	types: [
		"Metal",
	],




	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Slash",
			},

			damage: 50,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Sonic Edge",
			},
			effect: {
				en: "This attack’s damage isn’t affected by any effects on your opponent’s Active Pokémon.",
			},
			damage: 130,

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
	retreat: 3,



}

export default card
