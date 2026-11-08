import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Gible",
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		443,
	],

	hp: 50,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Fighting",
			],
			name: {
				'en-us': "Gnaw",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It attacks using its huge mouth. While its attacks are powerful, it hurts itself out of clumsiness, too.",
	},

	thirdParty: {
		cardmarket: 281245,
		tcgplayer: 85704
	}
}

export default card
