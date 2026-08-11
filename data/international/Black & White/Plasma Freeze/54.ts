import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Yamask",
		'fr-fr': "Tutafeh",
		'es-es': "Yamask",
		'it-it': "Yamask",
		'pt-br': "Yamask",
		'de-de': "Makabaja"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		562,
	],

	hp: 50,

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
				'en-us': "Transfer Pain",
				'fr-fr': "Transfert de Douleur",
			},
			effect: {
				'en-us': "Move 1 damage counter from any of your Pokémon to any of your opponent's Pokémon.",
				'fr-fr': "Déplacez 1 marqueur de dégâts de l'un de vos Pokémon vers l'un des Pokémon de votre adversaire.",
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "These Pokémon arose from the spirits of people interred in graves. Each retains memories of its former life.",
	},

	thirdParty: {
		cardmarket: 280932,
		tcgplayer: 90678
	}
}

export default card
