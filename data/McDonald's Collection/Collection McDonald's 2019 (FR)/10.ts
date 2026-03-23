import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Pikachu",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [25],
	hp: 60,
	types: ["Lightning"],

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
				"Fire",
			],
			name: {
				fr: "Feu Contrôlé",
			},
			effect: {
				fr: "Défaussez la carte du dessus du deck de votre adversaire.",
			},
		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				fr: "Lance-Flammes",
			},
			damage: "80",
			effect: {
				fr: "Défaussez une Énergie de ce Pokémon.",
			},
		},
	],
}

export default card
