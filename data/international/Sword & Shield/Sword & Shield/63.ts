import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Snom",
		'fr-fr': "Frissonille",
		'es-es': "Snom",
		'it-it': "Snom",
		'pt-br': "Snom",
		'de-de': "Snomnom"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "It eats snow that piles up on the ground. The more snow it eats, the bigger and more impressive the spikes on its back grow."
	},

	dexId: [872],

	thirdParty: {
		cardmarket: 436449,
		tcgplayer: 208360
	}
}

export default card
