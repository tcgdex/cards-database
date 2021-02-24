import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		fr: "Morpeko",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 80,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				fr: "Éclair",
			},
			effect: {
				fr: "Lancez une pièces. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 60,

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
