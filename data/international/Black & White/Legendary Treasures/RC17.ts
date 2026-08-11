import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Audino",
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		531,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Relaxed Roll",
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "Using the feelers on its ears, it can tell how someone is feeling or when an egg might hatch.",
	},

	thirdParty: {
		cardmarket: 281140
	}
}

export default card
