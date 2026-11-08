import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Wailmer",
		'fr-fr': "Wailmer",
		'es-es': "Wailmer",
		'it-it': "Wailmer",
		'pt-br': "Wailmer",
		'de-de': "Wailmer"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		320,
	],

	hp: 120,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
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
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Surf",
				'fr-fr': "Surf",
				'es-es': "Surf",
				'it-it': "Surf",
				'pt-br': "Surfe",
				'de-de': "Surfer"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It loves to startle people. It fills itself up with seawater and plays by bouncing around like a ball.",
	},

	thirdParty: {
		cardmarket: 297491,
		tcgplayer: 130929
	}
}

export default card
