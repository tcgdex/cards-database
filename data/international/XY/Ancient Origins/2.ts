import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Gloom",
		'fr-fr': "Ortide",
		'es-es': "Gloom",
		'it-it': "Gloom",
		'pt-br': "Gloom",
		'de-de': "Duflor"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		44,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Oddish",
		'fr-fr': "Mystherbe",
		'es-es': "Oddish",
		'it-it': "Oddish",
		'pt-br': "Oddish",
		'de-de': "Myrapla"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Drool",
				'fr-fr': "Gluant",
				'es-es': "Babeo",
				'it-it': "Sbavare",
				'pt-br': "Babar",
				'de-de': "Sabbern"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The honey it drools from its mouth smells so atrocious, it can curl noses more than a mile away.",
	},

	thirdParty: {
		cardmarket: 284183,
		tcgplayer: 100614
	}
}

export default card
