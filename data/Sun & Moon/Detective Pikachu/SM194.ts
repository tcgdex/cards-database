import { Card } from '../../../interfaces'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		fr: "Détective Pikachu",
	},
	illustrator: "MPC Film",
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
				"Lightning",
			],
			name: {
				fr: "Brillante Déduction",
			},
			effect: {
				fr: "Regardez les 4 cartes du dessus de votre deck et ajoutez l’une d’entre elles à votre main. Mélangez les autres cartes avec votre deck.",
			},

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
