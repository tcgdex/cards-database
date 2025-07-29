import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Azelf",
		fr: "Créfadet",
		es: "Azelf",
		it: "Azelf",
		pt: "Azelf",
		de: "Tobutz"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		482,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Trading Places",
				fr: "Permutation",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psyjamming",
				fr: "Distribution Psy",
			},
			effect: {
				en: "Move as many Special Energy attached to your opponent's Pokémon to your opponent's other Pokémon in any way you like.",
				fr: "Déplacez autant d'Énergies spéciales attachées aux Pokémon de votre adversaire vers d'autres Pokémon de votre adversaire, de la manière que vous voulez.",
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

	thirdParty: {
		cardmarket: 281059
	}
}

export default card
