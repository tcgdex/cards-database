import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Minccino",
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		572,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tail Slap",
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "Minccino greet each other by grooming one another thoroughly with their tails.",
	},

	thirdParty: {
		cardmarket: 281128
	}
}

export default card
