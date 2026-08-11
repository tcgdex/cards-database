import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Piplup",
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		393,
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
				'en-us': "Water Splash",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			},
			damage: 10,

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
		'en-us': "A poor walker, it often falls down. However, its strong pride makes it puff up its chest without a care.",
	},

	thirdParty: {
		cardmarket: 281141,
		tcgplayer: 88153
	}
}

export default card
