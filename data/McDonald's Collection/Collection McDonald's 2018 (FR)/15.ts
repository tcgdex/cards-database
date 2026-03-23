import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Feunard",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [38],
	hp: 100,
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
				"Water",
			],
			name: {
				fr: "Pistolet à O",
			},
			damage: "10",
		},
	],
}

export default card
