import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Machopeur",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [67],
	hp: 90,
	types: ["Fighting"],

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
				"Lightning",
				"Colorless",
			],
			name: {
				fr: "Balayage",
			},
			damage: "30",
		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				fr: "Fatal-Foudre",
			},
			damage: "90",
			effect: {
				fr: "Ce Pokémon s'inflige 30 dégâts.",
			},
		},
	],
}

export default card
