import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Kangaskhan",
		'fr-fr': "Kangourex",
		'es-es': "Kangaskhan",
		'it-it': "Kangaskhan",
		'pt-br': "Kangaskhan",
		'de-de': "Kangama"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		115,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tiny Punch",
				'fr-fr': "P'tit Coup d'Poing",
				'es-es': "Minipuño",
				'it-it': "Micropugno",
				'pt-br': "Soco Bebê",
				'de-de': "Mickriger Hieb"
			},

			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mega Punch",
				'fr-fr': "Ultimapoing",
				'es-es': "Megapuño",
				'it-it': "Megapugno",
				'pt-br': "Mega Soco",
				'de-de': "Megahieb"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "If it is safe, the young gets out of the belly pouch to play. The adult keeps a close eye on the youngster.",
	},

	thirdParty: {
		cardmarket: 289896,
		tcgplayer: 117850
	}
}

export default card
