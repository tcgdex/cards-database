import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Yamask",
		'fr-fr': "Tutafeh",
		'es-es': "Yamask",
		'it-it': "Yamask",
		'pt-br': "Yamask",
		'de-de': "Makabaja"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		562,
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
				'en-us': "Will-O-Wisp",
				'fr-fr': "Feu Follet",
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "These Pokémon arose from the spirits of people interred in graves. Each retains memories of its former life.",
	},

	thirdParty: {
		cardmarket: 280932,
		tcgplayer: 90679
	}
}

export default card
