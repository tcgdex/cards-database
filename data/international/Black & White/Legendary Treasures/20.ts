import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Vulpix",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		37,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Firebreathing",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 more damage.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "As each tail grows, its fur becomes more lustrous. When held, it feels slightly warm.",
	},

	thirdParty: {
		cardmarket: 281171,
		tcgplayer: 90448
	}
}

export default card
