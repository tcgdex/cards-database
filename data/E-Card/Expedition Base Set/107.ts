import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Dratini",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		147,
	],
	hp: 40,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
				"Lightning",
			],
			name: {
				en: "Dragon Smash",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
			},

		},
	],






}

export default card
