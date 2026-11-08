import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Plusle",
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		311,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tag Draw",
			},
			effect: {
				'en-us': "Shuffle your hand into your deck. Then, draw 4 cards. If Minun is on your Bench, draw 4 more cards.",
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Positive Ion",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 more damage.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It cheers on friends with pom-poms made of sparks. It drains power from telephone poles.",
	},

	thirdParty: {
		cardmarket: 281198,
		tcgplayer: 88174
	}
}

export default card
