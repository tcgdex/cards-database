import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Tapu Lele",
		fr: "Tokopiyon",
	},
	illustrator: "You Iribi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		785,
	],
	hp: 110,
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
				en: "Psywave",
				fr: "Vague Psy",
			},
			effect: {
				en: "This attack does 20 damage times the amount of Energy attached to your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d'Énergies attachées au Pokémon Actif de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Magical Swap",
				fr: "Permutation Magique",
			},
			effect: {
				en: "Move any number of damage counters on your opponent's Pokémon to their other Pokémon in any way you like.",
				fr: "Déplacez autant de marqueurs de dégâts que vous voulez des Pokémon de votre adversaire vers ses autres Pokémon, de la manière que vous voulez.",
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
