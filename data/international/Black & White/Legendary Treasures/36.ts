import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Phione",
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		489,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pull Out",
			},
			effect: {
				'en-us': "Put a card from your discard pile on top of your deck.",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Aqua Boomerang",
			},
			effect: {
				'en-us': "Return this Pokémon and all cards attached to it to your hand.",
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
		'en-us': "It drifts in warm seas. It always returns to where it was born, no matter how far it may have drifted.",
	},

	thirdParty: {
		cardmarket: 281187,
		tcgplayer: 88009
	}
}

export default card
