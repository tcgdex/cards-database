import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [4],

	name: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche",
		'es-es': "Charmander",
		'it-it': "Charmander",
		'pt-br': "Charmander",
		'de-de': "Glumanda"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Fire",
	],

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Collect",
				'fr-fr': "Collecte",
				'es-es': "Coleccionar",
				'it-it': "Tassa",
				'pt-br': "Coleta",
				'de-de': "Sammeln"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'es-es': "Roba 1 carta.",
				'it-it': "Pesca una carta.",
				'pt-br': "Compre 1 carta.",
				'de-de': "Ziehe 1 Karte."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Flare",
				'fr-fr': "Flamboiement",
				'es-es': "Llama",
				'it-it': "Fiammata",
				'pt-br': "Chama",
				'de-de': "Flackern"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511535,
				tcgplayer: 226392
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511535,
				tcgplayer: 226392
			}
		},
	],
}

export default card
