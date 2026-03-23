import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

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
				"Colorless",
			],
			name: {
				fr: "Griffe",
			},
			damage: "10",
		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				fr: "Queue de Flammes",
			},
			damage: "20",
		},
	],
}

export default card
