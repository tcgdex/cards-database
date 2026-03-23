import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Carapuce",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [7],
	hp: 60,
	types: ["Water"],

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
				"Fire",
			],
			name: {
				fr: "Flamboiement",
			},
			damage: "10",
		},
	],
}

export default card
