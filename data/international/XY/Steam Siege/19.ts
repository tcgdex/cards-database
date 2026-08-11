import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Monferno",
		'fr-fr': "Chimpenfeu",
		'es-es': "Monferno",
		'it-it': "Monferno",
		'pt-br': "Monferno",
		'de-de': "Panpyro"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		391,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Chimchar",
		'fr-fr': "Ouisticram",
		'es-es': "Chimchar",
		'it-it': "Chimchar",
		'pt-br': "Chimchar",
		'de-de': "Panflam"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'es-es': "Arañazo",
				'it-it': "Graffio",
				'pt-br': "Arranhão",
				'de-de': "Kratzer"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flare",
				'fr-fr': "Flamboiement",
				'es-es': "Llama",
				'it-it': "Fiammata",
				'pt-br': "Labareda",
				'de-de': "Flackern"
			},

			damage: 30,

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
		'en-us': "It uses ceilings and walls to launch aerial attacks. Its fiery tail is but one weapon.",
	},

	thirdParty: {
		cardmarket: 291525,
		tcgplayer: 121008
	}
}

export default card
