import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Charmander",
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		4,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Draw In",
			},
			effect: {
				'en-us': "Attach 2 Fire Energy cards from your discard pile to this Pokémon.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flare",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The fire on the tip of its tail is a measure of its life. If healthy, its tail burns intensely.",
	},

	thirdParty: {
		cardmarket: 281168,
		tcgplayer: 84219
	}
}

export default card
