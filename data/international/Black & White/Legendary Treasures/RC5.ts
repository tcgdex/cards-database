import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Torchic",
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		255,
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
			],
			name: {
				'en-us': "Peck",
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Live Coal",
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
		'en-us': "A fire burns inside, so it feels very warm to hug. It launches fireballs of 1,800 degrees F.",
	},

	thirdParty: {
		cardmarket: 281145
	}
}

export default card
