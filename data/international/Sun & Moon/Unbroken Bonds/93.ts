import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Rhyhorn",
		'fr-fr': "Rhinocorne",
		'es-es': "Rhyhorn",
		'it-it': "Rhyhorn",
		'pt-br': "Rhyhorn",
		'de-de': "Rihorn"
	},

	illustrator: "otumami",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		111,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Horn Attack",
				'fr-fr': "Koud’Korne",
				'es-es': "Cornada",
				'it-it': "Incornata",
				'pt-br': "Ataque de Chifre",
				'de-de': "Hornattacke"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
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

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Strong, but not too bright, this Pokémon can shatter even a skyscraper with its charging Tackles.",
	},

	thirdParty: {
		cardmarket: 372383,
		tcgplayer: 189192
	}
}

export default card
