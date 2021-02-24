import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		fr: "Berserkatt de Galar",
	},
	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 120,
	types: [
		"Metal",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Boost Acier",
			},
			effect: {
				fr: "Les attaques de vos Pokémon Acier infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				fr: "Griffe Acier",
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
	retreat: 2,



}

export default card
