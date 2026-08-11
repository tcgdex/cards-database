import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Seel",
		'fr-fr': "Otaria",
		'es-es': "Seel",
		'it-it': "Seel",
		'pt-br': "Seel",
		'de-de': "Jurob"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		86,
	],

	hp: 80,

	types: [
		"Water",
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
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It has always been supposed that Seel live only in cold seas. Their having shown up in Alola is a mystery.",
	},

	thirdParty: {
		cardmarket: 372335,
		tcgplayer: 189143
	}
}

export default card
