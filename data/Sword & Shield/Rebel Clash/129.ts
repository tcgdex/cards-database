import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Bronzor",
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,







	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Ram",
			},

			damage: 10,

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Speed Dive",
			},

			damage: 20,

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
	retreat: 1,



}

export default card
