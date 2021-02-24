import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Zorua",
		fr: "Zorua",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		570,
	],
	hp: 60,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Hide in Shadows",
				fr: "Cachette d’Ombre",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
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
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
