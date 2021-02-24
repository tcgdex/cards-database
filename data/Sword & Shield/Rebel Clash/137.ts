import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Copperajah VMAX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,



	evolveFrom: {
		en: "Copperajah V",
	},



	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Dangerous Nose",
			},
			effect: {
				en: "If your opponent’s Active Pokémon is a Basic Pokémon, this attack does 100 more damage.",
			},
			damage: "100+",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "G-Max Hammer",
			},

			damage: 240,

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
	retreat: 4,



}

export default card
