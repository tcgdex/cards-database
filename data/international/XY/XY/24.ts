import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Fennekin",
		'fr-fr': "Feunnec",
		'es-es': "Fennekin",
		'it-it': "Fennekin",
		'pt-br': "Fennekin",
		'de-de': "Fynx"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		653,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Will-O-Wisp",
				'fr-fr': "Feu Follet",
				'es-es': "Fuego Fatuo",
				'it-it': "Fuocofatuo",
				'pt-br': "Fogo Fátuo",
				'de-de': "Irrlicht"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Eating a twig fills it with energy, and its roomy ears give vent to air hotter than 390 degrees Fahrenheit.",
	},

	thirdParty: {
		cardmarket: 281361,
		tcgplayer: 85409
	}
}

export default card
