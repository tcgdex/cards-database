import { Card } from '../../../interfaces'
import Set from '../POP Series 6'

const card: Card = {
	name: {
		en: "Gible",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		443,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Surprise Attack",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
			},

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],





}

export default card
