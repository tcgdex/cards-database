import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Skiploom",
		'fr-fr': "Floravol",
		'es-es': "Skiploom",
		'it-it': "Skiploom",
		'pt-br': "Skiploom",
		'de-de': "Hubelupf"
	},

	illustrator: "Eri Yamaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		188,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Hoppip",
		'fr-fr': "Granivol",
		'es-es': "Hoppip",
		'it-it': "Hoppip",
		'pt-br': "Hoppip",
		'de-de': "Hoppspross"
	},

	stage: "Stage1",

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

			damage: 20,

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
		'en-us': "It spreads its petals to absorb sunlight. It also floats in the air to get closer to the sun.",
	},

	thirdParty: {
		cardmarket: 291511,
		tcgplayer: 120993
	}
}

export default card
