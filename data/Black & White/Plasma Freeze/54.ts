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
			},
			effect: {
				en: "Move 1 damage counter from any of your Pokémon to any of your opponent's Pokémon.",
				fr: "Déplacez 1 marqueur de dégâts de l'un de vos Pokémon vers l'un des Pokémon de votre adversaire.",
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

	thirdParty: {
		cardmarket: 280932,
		tcgplayer: 90678
	}
}

export default card
