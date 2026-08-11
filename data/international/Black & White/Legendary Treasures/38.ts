import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Dewott",
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		502,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Oshawott",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Tail",
			},
			effect: {
				'en-us': "Flip a coin for each Water Energy attached to this Pokémon. This attack does 10 more damage for each heads.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Scalchop techniques differ from one Dewott to another. It never neglects maintaining its scalchops.",
	},

	thirdParty: {
		cardmarket: 281189,
		tcgplayer: 84796
	}
}

export default card
