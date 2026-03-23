import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Machoc",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [66],
	hp: 70,
	types: ["Fighting"],

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
				"Fighting",
			],
			name: {
				fr: "Koud'Poing",
			},
			damage: "10",
		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				fr: "Balayage",
			},
			damage: "30",
		},
	],
}

export default card
