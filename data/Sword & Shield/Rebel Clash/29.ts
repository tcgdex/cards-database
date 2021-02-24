import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Magmar",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,







	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Punch",
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Heat Breath",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
