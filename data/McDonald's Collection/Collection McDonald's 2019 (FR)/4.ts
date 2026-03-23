import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Salamèche",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [4],
	hp: 70,
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
				"Grass",
				"Colorless",
			],
			name: {
				fr: "Pâté",
			},
			damage: "20",
			effect: {
				fr: "Soignez 10 dégâts à ce Pokémon.",
			},
		},
	],
}

export default card
