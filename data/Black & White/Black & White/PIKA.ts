import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		fr: "Pikachu",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 60,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				fr: "Énergisant",
			},
			effect: {
				fr: "Attachez une carte Énergie Lightning de votre pile de défausse à ce Pokémon.",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Tonnerre",
			},
			effect: {
				fr: "Défaussez toutes les Énergies attachées à ce Pokémon.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
