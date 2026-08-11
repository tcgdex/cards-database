import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Feebas",
		'fr-fr': "Barpau",
		'es-es': "Feebas",
		'it-it': "Feebas",
		'pt-br': "Feebas",
		'de-de': "Barschwa"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		349,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Add-a-Dash",
				'fr-fr': "Rallonge",
			},
			effect: {
				'en-us': "Flip 2 coins. For each heads, draw a card.",
				'fr-fr': "Lancez 2 pièces. Pour chaque côté face, piochez une carte.",
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is a shabby and ugly Pokémon. However, it is very hardy and can survive on little water.",
	},

	thirdParty: {
		cardmarket: 280466,
		tcgplayer: 85406
	}
}

export default card
