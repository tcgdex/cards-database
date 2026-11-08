import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Tirtouga",
		'fr-fr': "Carapagos",
		'es-es': "Tirtouga",
		'it-it': "Tirtouga",
		'pt-br': "Tirtouga",
		'de-de': "Galapaflos"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		564,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Unidentified Fossil",
		'fr-fr': "Fossile Inconnu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Shell Attack",
				'fr-fr': "Coquill-Attaque",
				'es-es': "Ataque Caparazón",
				'it-it': "Gusciattacco",
				'pt-br': "Ataque Carapaça",
				'de-de': "Muschelangriff"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Boulder Crush",
				'fr-fr': "Rocher Écrasant",
				'es-es': "Alud de Rocas",
				'it-it': "Macignata",
				'pt-br': "Rocha Esmagadora",
				'de-de': "Felsenquetscher"
			},

			damage: 60,

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
		'en-us': "It was restored from an ancient fossil. Tirtouga lived in the sea but came up onto the land to search for prey.",
	},

	thirdParty: {
		cardmarket: 388047,
		tcgplayer: 194965
	}
}

export default card
