import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Hoppip",
		'fr-fr': "Granivol",
		'es-es': "Hoppip",
		'it-it': "Hoppip",
		'pt-br': "Hoppip",
		'de-de': "Hoppspross"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		187,
	],

	hp: 40,

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
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It drifts on winds. It is said that when Hoppip gather in fields and mountains, spring is on the way.",
	},

	thirdParty: {
		cardmarket: 291510,
		tcgplayer: 120992
	}
}

export default card
