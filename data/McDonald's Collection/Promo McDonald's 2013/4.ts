import { Card } from '../../../interfaces'
import Set from "../Promo McDonald's 2013"

const card: Card = {
	name: {
		fr: "Givrali",
	},
	illustrator: "Rya Ueda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		471,
	],
	hp: 90,
	types: [
		"Water",
	],

	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Vive-Attaque",
			},
			effect: {
				fr: "Lancez une pièce. Si c'est face, cetter attaque inflige 30 dégâts supplémentaires.",
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				fr: "ranvoi d'Énergie",
			},
			effect: {
				fr: "Déplacez une Énergie de ce Pokémon vers 1 de vos Pokémon de Banc.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "x2"
		},
	],

	retreat: 1,



}

export default card
