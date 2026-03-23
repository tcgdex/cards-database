import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Spectrum",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [93],
	hp: 70,
	types: ["Psychic"],

	stage: "Stage1",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},
	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				fr: "Gifle",
			},
			damage: "10",
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Par Ici",
			},
			effect: {
				fr: "Échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
			},
		},
	],
}

export default card
