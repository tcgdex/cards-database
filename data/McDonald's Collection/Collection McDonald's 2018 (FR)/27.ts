import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Tadmorv",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [88],
	hp: 70,
	types: ["Psychic"],

	stage: "Basic",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},
	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				fr: "Cyclone",
			},
			damage: "10",
			effect: {
				fr: "Votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc.",
			},
		},
	],
}

export default card
