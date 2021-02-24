import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Brionne",
		fr: "Otarlette",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		729,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Popplio",
		fr: "Otaquin",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Captivate",
				fr: "Séduction",
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
				fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
