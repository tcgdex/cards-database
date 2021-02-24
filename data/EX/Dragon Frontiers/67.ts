import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Totodile δ",
	},
	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		158,
	],
	hp: 40,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
			},

			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Rage",
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each damage counter on Totodile.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
