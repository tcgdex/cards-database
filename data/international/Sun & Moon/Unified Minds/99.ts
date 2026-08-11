import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Salazzle",
		'fr-fr': "Malamandre",
		'es-es': "Salazzle",
		'it-it': "Salazzle",
		'pt-br': "Salazzle",
		'de-de': "Amfira"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		758,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Salandit",
		'fr-fr': "Tritox",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Smack",
				'fr-fr': "Claque",
				'es-es': "Palmetazo",
				'it-it': "Schiaffo",
				'pt-br': "Estalo",
				'de-de': "Klatscher"
			},

			damage: 40,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slashing Claw",
				'fr-fr': "Griffe Taillante",
				'es-es': "Garra Cuchillazo",
				'it-it': "Artigli Laceranti",
				'pt-br': "Garra Cortadora",
				'de-de': "Schlitzende Klaue"
			},

			damage: 90,

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
		'en-us': "Salazzle lives deep in caves and forces the Salandit it has attracted with its pheromones to serve it.",
	},

	thirdParty: {
		cardmarket: 388002,
		tcgplayer: 195033
	}
}

export default card
