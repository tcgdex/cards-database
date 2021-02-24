import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Pelipper",
	},
	illustrator: "Eri Yamaki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,



	evolveFrom: {
		en: "Wingull",
	},



	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wing Attack",
			},

			damage: 50,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Cyclone",
			},
			effect: {
				en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			},
			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],
	retreat: 2,



}

export default card
