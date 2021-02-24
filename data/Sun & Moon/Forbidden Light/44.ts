import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Espurr",
		fr: "Psystigri",
	},
	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		677,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Energy Teaser",
				fr: "Énergie Provocante",
			},
			effect: {
				en: "Move an Energy from 1 of your opponent's Benched Pokémon to another of their Pokémon.",
				fr: "Déplacez une Énergie de l’un des Pokémon de Banc de votre adversaire vers un autre de ses Pokémon.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
