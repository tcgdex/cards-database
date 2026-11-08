import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Drifloon",
		'fr-fr': "Baudrive",
		'es-es': "Drifloon",
		'it-it': "Drifloon",
		'pt-br': "Drifloon",
		'de-de': "Driftlon"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		425,
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
				'en-us': "Beat",
				'fr-fr': "Bataille",
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Gust",
				'fr-fr': "Tornade",
			},

			damage: 20,

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
		'en-us': "Because of the way it floats aimlessly, an old folktale calls it a \"Signpost for Wandering Spirits.\"",
	},

	thirdParty: {
		cardmarket: 280488,
		tcgplayer: 84962
	}
}

export default card
