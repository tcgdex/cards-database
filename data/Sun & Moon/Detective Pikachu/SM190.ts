import { Card } from '../../../interfaces'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		fr: "Détective Pikachu",
	},
	illustrator: "Framestore",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 90,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Pause Café",
			},
			effect: {
				fr: "Soignez 30 dégâts à ce Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Poing Tire-Bouchon",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
