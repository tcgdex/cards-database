import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Trubbish",
		'fr-fr': "Miamiasme",
		'es-es': "Trubbish",
		'it-it': "Trubbish",
		'pt-br': "Trubbish",
		'de-de': "Unratütox"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		568,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pound",
				'fr-fr': "Écras'Face",
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Sludge Bomb",
				'fr-fr': "Bomb-Beurk",
			},

			damage: 40,

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
		'en-us': "Wanting more garbage, they follow people who litter. They always belch poison gas.",
	},

	thirdParty: {
		cardmarket: 280803,
		tcgplayer: 90068
	}
}

export default card
