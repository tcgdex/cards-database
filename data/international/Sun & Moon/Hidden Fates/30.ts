import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Jynx",
		'fr-fr': "Lippoutou",
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		124,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Slap",
				'fr-fr': "Gifle",
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Lovely Kiss",
				'fr-fr': "Grobisou",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It sways its hips to a rhythm all its own. The precise movements of Jynx living in Alola are truly wonderful.",
	},

	thirdParty: {
		cardmarket: 394677,
		tcgplayer: 197674
	}
}

export default card
