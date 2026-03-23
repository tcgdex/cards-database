import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Bulbizarre",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [1],
	hp: 60,
	types: ["Grass"],

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
			],
			name: {
				fr: "Fouet Lianes",
			},
			damage: "10",
		},
	],
}

export default card
