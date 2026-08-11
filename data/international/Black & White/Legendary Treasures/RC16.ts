import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Ursaring",
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		217,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Teddiursa",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Picnic Weather",
			},
			effect: {
				'en-us': "Put a Teddiursa from your discard pile onto your Bench. Then, attach an Energy card from your discard pile to that Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fury Swipes",
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 50 damage times the number of heads.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		'en-us': "In its territory, it leaves scratches on trees that bear delicious berries or fruits.",
	},

	thirdParty: {
		cardmarket: 281132
	}
}

export default card
