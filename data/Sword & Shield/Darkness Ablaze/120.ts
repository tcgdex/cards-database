import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Skarmory",
	},
	illustrator: "NC Empire",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 120,
	types: [
		"Metal",
	],




	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Metal Arms",
			},
			effect: {
				en: "If this Pokémon has a Pokémon Tool attached, this attack does 40 more damage.",
			},
			damage: "10+",

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cutting Wind",
			},

			damage: 80,

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
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,



}

export default card
