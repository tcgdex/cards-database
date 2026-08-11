import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Oshawott",
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		501,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Razor Shell",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			},
			damage: 20,

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
		'en-us': "The scalchop on its stomach is made from the same elements as claws. It detaches the scalchop for use as a blade.",
	},

	thirdParty: {
		cardmarket: 281188,
		tcgplayer: 87896
	}
}

export default card
