import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Florizarre",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [3],
	hp: 140,
	types: ["Grass"],

	stage: "Stage2",

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
				fr: "Griffe",
			},
			damage: "30",
		},
	],
}

export default card
