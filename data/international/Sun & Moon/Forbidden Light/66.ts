import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Binacle",
		'fr-fr': "Opermine",
		'es-es': "Binacle",
		'it-it': "Binacle",
		'pt-br': "Binacle",
		'de-de': "Bithora"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		688,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Allotment",
				'fr-fr': "Attribution",
				'es-es': "Asignación",
				'it-it': "Assegnazione",
				'pt-br': "Atribuição",
				'de-de': "Anteil"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'es-es': "Roba 1 carta.",
				'it-it': "Pesca una carta.",
				'pt-br': "Compre 1 carta.",
				'de-de': "Ziehe 1 Karte."
			},
			damage: 10,

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
		'en-us': "They stretch and then contract, yanking their rocks along with them in bold hops. They eat seaweed that washes up on the shoreline.",
	},

	thirdParty: {
		cardmarket: 355584,
		tcgplayer: 165718
	}
}

export default card
