import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Yamask",
		fr: "Tutafeh",
		es: "Yamask",
		it: "Yamask",
		pt: "Yamask",
		de: "Makabaja"
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
				en: "Transfer Pain",
				fr: "Transfert de Douleur",
				de: "Schmerztranfer"
			},
			effect: {
				en: "Move 1 damage counter from any of your Pokémon to any of your opponent's Pokémon.",
				fr: "Déplacez 1 marqueur de dégâts de l'un de vos Pokémon vers l'un des Pokémon de votre adversaire.",
				de: "Verschiebe 1 Schadensmarke von einem deiner Pokémon auf ein Pokémon deines Gegners."
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
		en: "These Pokémon arose from the spirits of people interred in graves. Each retains memories of its former life.",
		de: "Es entsteht aus den Seelen von längst begrabenen Menschen und kann sich immer noch an deren Vergangenheit erinnern."
	},

	thirdParty: {
		cardmarket: 280932,
		tcgplayer: 90678
	}
}

export default card
