import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		790,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Cosmog",
		fr: "Cosmog",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Teleport",
				fr: "Téléport",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
