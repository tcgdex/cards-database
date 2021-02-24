import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Bronzong",
	},
	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,



	evolveFrom: {
		en: "Bronzor",
	},



	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Smack",
			},

			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gyro Ball",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon. If you do, your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			},
			damage: 70,

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
