import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019 (FR)"

const card: Card = {
	name: {
		fr: "Ectoplasma",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [94],
	hp: 130,
	types: ["Psychic"],

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
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Allonger",
			},
			damage: "20",
		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				fr: "Empal'Korne",
			},
			damage: "60",
		},
	],
}

export default card
