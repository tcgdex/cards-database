import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Swadloon",
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		541,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Sewaddle",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Tackle",
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "String Shot",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Forests where Swadloon live have superb foliage because the nutrients they make from fallen leaves nourish the plant life.",
	},

	thirdParty: {
		cardmarket: 281162,
		tcgplayer: 89669
	}
}

export default card
