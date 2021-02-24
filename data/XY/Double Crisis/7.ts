import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Aqua's Grimer",
		fr: "Tadmorv de la Team Aqua",
	},
	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		88,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Pound",
				fr: "Écras'Face",
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mud-Slap",
				fr: "Coud'Boue",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
