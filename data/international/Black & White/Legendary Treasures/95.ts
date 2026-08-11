import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Gabite",
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		444,
	],

	hp: 80,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Gible",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Fighting",
			],
			name: {
				'en-us': "Shred",
			},
			effect: {
				'en-us': "This attack's damage isn't affected by any effects on the Defending Pokémon.",
			},
			damage: 40,

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
		'en-us': "It loves sparkly things. It seeks treasures in caves and hoards the loot in its nest.",
	},

	thirdParty: {
		cardmarket: 281246,
		tcgplayer: 85602
	}
}

export default card
