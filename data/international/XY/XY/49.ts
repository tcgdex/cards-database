import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Spoink",
		'fr-fr': "Spoink",
		'es-es': "Spoink",
		'it-it': "Spoink",
		'pt-br': "Spoink",
		'de-de': "Spoink"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		325,
	],

	hp: 60,

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
				'en-us': "Splash",
				'fr-fr': "Trempette",
				'es-es': "Salpicadura",
				'it-it': "Splash",
				'pt-br': "Borrifada",
				'de-de': "Platscher"
			},

			damage: 10,

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
		'en-us': "It bounces constantly, using its tail like a spring. The shock of bouncing keeps its heart beating.",
	},

	thirdParty: {
		cardmarket: 281386,
		tcgplayer: 89480
	}
}

export default card
