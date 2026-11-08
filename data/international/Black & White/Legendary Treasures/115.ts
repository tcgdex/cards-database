import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Zekrom",
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		644,
	],

	hp: 130,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Outrage",
			},
			effect: {
				'en-us': "Does 10 more damage for each damage counter on this Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Bolt Strike",
			},
			effect: {
				'en-us': "This Pokémon does 40 damage to itself.",
			},
			damage: 120,

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
		'en-us': "This Pokémon appears in legends. In its tail, it has a giant generator that creates electricity.",
	},

	thirdParty: {
		cardmarket: 281202,
		tcgplayer: 90739
	}
}

export default card
