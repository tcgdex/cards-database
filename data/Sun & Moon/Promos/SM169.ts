import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		fr: "Évoli et Ronflex-GX",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 270,
	types: [
		"Colorless",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{

			name: {
				fr: "Règle des ESCOUADES",
			},


		},
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Courage !",
			},
			effect: {
				fr: "Attachez une carte Énergie de votre main à l’un de vos Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Pression Poids Lourd",
			},
			effect: {
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 120 dégâts supplémentaires.",
			},
			damage: "120+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Amis Mégatonnes-GX",
			},
			effect: {
				fr: "Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), piochez jusqu’à avoir 10 cartes en main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 210,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
