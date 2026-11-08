import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Spiritomb",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		442,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Sealing Scream",
			},
			effect: {
				'en-us': "Each player can’t play any ACE SPEC cards from his or her hand.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hexed Mirror",
			},
			effect: {
				'en-us': "Shuffle your hand into your deck. Then, draw a number of cards equal to the number of cards in your opponent's hand.",
			},

		},
	],

	retreat: 1,

	description: {
		'en-us': "Its constant mischief and misdeeds resulted in it being bound to an Odd Keystone by a mysterious spell.",
	},

	thirdParty: {
		cardmarket: 281238,
		tcgplayer: 89468
	}
}

export default card
