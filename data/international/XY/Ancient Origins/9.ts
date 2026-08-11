import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Combee",
		'fr-fr': "Apitrini",
		'es-es': "Combee",
		'it-it': "Combee",
		'pt-br': "Combee",
		'de-de': "Wadribie"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		415,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Bug Bite",
				'fr-fr': "Piqûre",
				'es-es': "Picadura",
				'it-it': "Coleomorso",
				'pt-br': "Picada",
				'de-de': "Käferbiss"
			},

			damage: 10,

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
		'en-us': "It collects and delivers honey to its colony. At night, they cluster to form a beehive and sleep.",
	},

	thirdParty: {
		cardmarket: 284190,
		tcgplayer: 101434
	}
}

export default card
