import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Taillow",
		'fr-fr': "Nirondelle",
		'es-es': "Taillow",
		'it-it': "Taillow",
		'pt-br': "Taillow",
		'de-de': "Schwalbini"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		276,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Peck",
				'fr-fr': "Picpic",
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

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has a gutsy spirit that makes it bravely take on tough foes. It flies in search of warm climates.",
	},

	thirdParty: {
		cardmarket: 280699,
		tcgplayer: 89736
	}
}

export default card
