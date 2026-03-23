import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Goupix",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [37],
	hp: 60,
	types: ["Fire"],

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
				"Colorless",
			],
			name: {
				fr: "Bâillement",
			},
			effect: {
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
		},
	],
}

export default card
