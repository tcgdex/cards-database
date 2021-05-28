import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		fr: "Kangourex-GX",
	},
	illustrator: "aky CG Works",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 180,
	types: [
		"Colorless",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Coup d’Poing en Demi Spirale",
			},
			effect: {
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Frappe Enragée",
			},
			effect: {
				fr: "Si le Pokémon Actif de votre adversaire est Confus, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: "80+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Combine Familiale-GX",
			},
			effect: {
				fr: "Piochez 5 cartes. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
