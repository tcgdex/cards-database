import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Rondoudou",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [39],
	hp: 60,
	types: ["Fairy"],

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
				fr: "Attaque Tournante",
			},
			damage: "10",
		},
	],
}

export default card
