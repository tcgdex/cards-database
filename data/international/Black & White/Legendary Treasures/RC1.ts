import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Snivy",
	},

	illustrator: "Eske Yoshinob",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		495,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Growth",
			},
			effect: {
				'en-us': "Attach a Grass Energy card from your hand to this Pokémon.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Razor Leaf",
			},

			damage: 30,

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
		'en-us': "Being exposed to sunlight makes its movements swifter. It uses vines more adeptly than its hands.",
	},

	thirdParty: {
		cardmarket: 281150
	}
}

export default card
