import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Gabite",
		'fr-fr': "Carmache",
		'es-es': "Gabite",
		'it-it': "Gabite",
		'pt-br': "Gabite",
		'de-de': "Knarksel"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		444,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Gible",
		'fr-fr': "Griknot",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Corkscrew Punch",
				'fr-fr': "Poing Tire-Bouchon",
				'es-es': "Puño Tirabuzón",
				'it-it': "Pugno Rotante",
				'pt-br': "Soco Saca-rolha",
				'de-de': "Korkenzieherhieb"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Sharp Scythe",
				'fr-fr': "Faucille Acérée",
				'es-es': "Guadaña Afilada",
				'it-it': "Falcetagliente",
				'pt-br': "Foice Afiada",
				'de-de': "Scharfe Sense"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It loves shiny things. When it finds a Sableye trying to catch a Carbink, Gabite becomes furiously angry and attacks the Sableye.",
	},

	thirdParty: {
		cardmarket: 388367,
		tcgplayer: 195066
	}
}

export default card
