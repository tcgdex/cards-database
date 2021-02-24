import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Chewtle",
	},
	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 80,
	types: [
		"Water",
	],




	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Jaw Lock",
			},
			effect: {
				en: "During your opponent’s next turn, the Defending Pokémon can’t retreat.",
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

	retreat: 2,



}

export default card
