import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Wimpod",
	},
	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 70,
	types: [
		"Grass",
	],




	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Gnaw and Run",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
