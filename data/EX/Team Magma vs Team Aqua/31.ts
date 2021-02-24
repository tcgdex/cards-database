import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Sealeo",
	},
	illustrator: "T. Honda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		364,
	],
	hp: 80,
	types: [
		"Water",
	],

	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aurora Beam",
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Knock Over",
			},
			effect: {
				en: "You may discard any Stadium card in play.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],





}

export default card
