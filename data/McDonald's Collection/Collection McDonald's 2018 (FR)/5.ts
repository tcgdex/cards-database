import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Reptincel",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [5],
	hp: 90,
	types: ["Fire"],

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
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Bélier",
			},
			damage: "60",
			effect: {
				fr: "Ce Pokémon s'inflige 20 dégâts.",
			},
		},
	],
}

export default card
