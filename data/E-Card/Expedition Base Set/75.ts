import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Dragonair",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		148,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Dratini",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Lightning",
			],
			name: {
				en: "Spiral Wave",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 20 damage times the number of heads.",
			},
			damage: 20,

		},
	],






}

export default card
