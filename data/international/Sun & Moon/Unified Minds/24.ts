import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Camerupt",
		'fr-fr': "Camérupt",
		'es-es': "Camerupt",
		'it-it': "Camerupt",
		'pt-br': "Camerupt",
		'de-de': "Camerupt"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		323,
	],

	hp: 140,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Numel",
		'fr-fr': "Chamallot",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Strong Flare",
				'fr-fr': "Flamboiement Intense",
				'es-es': "Fuerte Llama",
				'it-it': "Vampata Potente",
				'pt-br': "Labareda Forte",
				'de-de': "Großes Auflodern"
			},
			effect: {
				'en-us': "Discard 2 Energy from this Pokémon.",
				'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
				'es-es': "Descarta 2 Energías de este Pokémon.",
				'it-it': "Scarta due Energie assegnate a questo Pokémon.",
				'pt-br': "Descarte 2 Energias deste Pokémon.",
				'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "The volcanoes on its back have a major eruption every 10 years—or whenever it becomes really angry.",
	},

	thirdParty: {
		cardmarket: 387952,
		tcgplayer: 194940
	}
}

export default card
