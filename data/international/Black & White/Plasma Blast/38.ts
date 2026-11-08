import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Azelf",
		'fr-fr': "Créfadet",
		'es-es': "Azelf",
		'it-it': "Azelf",
		'pt-br': "Azelf",
		'de-de': "Tobutz"
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
				'en-us': "Trading Places",
				'fr-fr': "Permutation",
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psyjamming",
				'fr-fr': "Distribution Psy",
			},
			effect: {
				'en-us': "Move as many Special Energy attached to your opponent's Pokémon to your opponent's other Pokémon in any way you like.",
				'fr-fr': "Déplacez autant d'Énergies spéciales attachées aux Pokémon de votre adversaire vers d'autres Pokémon de votre adversaire, de la manière que vous voulez.",
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

	description: {
		'en-us': "When Azelf flew, people gained the determination to do things. It was the birth of willpower.",
	},

	thirdParty: {
		cardmarket: 281059,
		tcgplayer: 83676
	}
}

export default card
