import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

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
				"Psychic",
			],
			name: {
				fr: "Regard Menaçant",
			},
			effect: {
				fr: "Placez un marqueur de dégâts sur l'un des Pokémon de votre adversaire.",
			},
		},
	],
}

export default card
