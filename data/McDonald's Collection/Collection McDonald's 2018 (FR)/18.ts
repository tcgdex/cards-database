import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Miaouss",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [52],
	hp: 60,
	types: ["Colorless"],

	stage: "Basic",

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
				fr: "Poliroche",
			},
			effect: {
				fr: "Pendant votre prochain tour, ce Pokémon n'a pas de Coût de Retraite.",
			},
		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Roulade",
			},
			damage: "40",
		},
	],
}

export default card
