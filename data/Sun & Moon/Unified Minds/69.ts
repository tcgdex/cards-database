import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Tapu Koko",
		fr: "Tokorico",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 120,
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
				en: "Electro Ball",
				fr: "Boule Élek",
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Nature Dive",
				fr: "Piqué Naturel",
			},
			effect: {
				en: "If your opponent's Active Pokémon is an Ultra Beast, this attack does 100 more damage, and discard 2 Energy from this Pokémon.",
				fr: "Si le Pokémon Actif de votre adversaire est une Ultra-Chimère, cette attaque inflige 100 dégâts supplémentaires et vous défaussez 2 Énergies de ce Pokémon.",
			},
			damage: 100,

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
	retreat: 1,



}

export default card
