import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Lapras",
		'fr-fr': "Lokhlass",
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		131,
	],

	hp: 120,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Wave",
				'fr-fr': "Aqua-Vague",
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It likes swimming around with people on its back. In the Alola region, it's an important means of transportation over water.",
	},

	thirdParty: {
		cardmarket: 394702,
		tcgplayer: 197661
	}
}

export default card
