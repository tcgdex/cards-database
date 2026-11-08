import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Ninetales",
	},

	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		38,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Vulpix",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Color Coordination",
			},
			effect: {
				'en-us': "If this Pokémon has any basic Energy attached to it that is the same type as the Defending Pokémon, this attack does 40 more damage.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Each of its nine tails is imbued with supernatural power, and it can live for a thousand years.",
	},

	thirdParty: {
		cardmarket: 281172,
		tcgplayer: 87780
	}
}

export default card
