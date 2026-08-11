import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Zweilous",
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		634,
	],

	hp: 80,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Deino",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Crunch",
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Darkness",
				"Darkness",
			],
			name: {
				'en-us': "Dragon Claw",
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "After it has eaten up all the food in its territory, it moves to another area. Its two heads do not get along.",
	},

	thirdParty: {
		cardmarket: 281249,
		tcgplayer: 90783
	}
}

export default card
