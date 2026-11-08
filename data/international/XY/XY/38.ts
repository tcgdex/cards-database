import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Simipour",
		'fr-fr': "Flotoutan",
		'es-es': "Simipour",
		'it-it': "Simipour",
		'pt-br': "Simipour",
		'de-de': "Sodachita"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		516,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Panpour",
		'fr-fr': "Flotajou",
		'es-es': "Panpour",
		'it-it': "Panpour",
		'pt-br': "Panpour",
		'de-de': "Sodamak"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Recycle",
				'fr-fr': "Recyclage",
				'es-es': "Reciclaje",
				'it-it': "Riciclo",
				'pt-br': "Reciclagem",
				'de-de': "Aufbereitung"
			},
			effect: {
				'en-us': "Put a card from your discard pile on top of your deck.",
				'fr-fr': "Mettez une carte de votre pile de défausse sur le dessus de votre deck.",
				'es-es': "Pon 1 carta de tu pila de descartes en la parte superior de tu baraja.",
				'it-it': "Prendi una carta qualsiasi dalla tua pila degli scarti e mettila in cima al tuo mazzo.",
				'pt-br': "Coloque um card da sua pilha de descarte em cima do seu baralho.",
				'de-de': "Lege 1 beliebige Karte von deinem Ablagestapel auf dein Deck."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Surf",
				'fr-fr': "Surf",
				'es-es': "Surf",
				'it-it': "Surf",
				'pt-br': "Surfar",
				'de-de': "Surfer"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The high-pressure water expelled from its tail is so powerful, it can destroy a concrete wall.",
	},

	thirdParty: {
		cardmarket: 281375,
		tcgplayer: 89220
	}
}

export default card
