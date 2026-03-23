import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Nymphali",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [700],
	hp: 90,
	types: ["Fairy"],

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
				"Colorless",
			],
			name: {
				fr: "Ronge",
			},
			damage: "20",
		},
	],
}

export default card
