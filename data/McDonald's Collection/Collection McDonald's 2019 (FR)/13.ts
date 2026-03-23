import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Mélodelfe",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [36],
	hp: 100,
	types: ["Fairy"],

	stage: "Stage1",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},
	attacks: [
		{
			cost: [],
			name: {
				fr: "Hurlement",
			},
			effect: {
				fr: "Votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc.",
			},
		},
		{
			cost: [
				"Water",
			],
			name: {
				fr: "Verglas",
			},
			damage: "10",
		},
	],
}

export default card
