import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Bisharp",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		625,
	],
	hp: 90,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Pawniard",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Slash",
			},

			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Cutter",
			},
			effect: {
				en: "Flip 3 coins. If 1 of them is heads, this attack does 10 more damage. If 2 of them are heads, this attack does 30 more damage. If all of them are heads, this attack does 60 more damage.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],




}

export default card
