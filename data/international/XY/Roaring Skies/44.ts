import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Togetic",
		'fr-fr': "Togetic",
		'es-es': "Togetic",
		'it-it': "Togetic",
		'pt-br': "Togetic",
		'de-de': "Togetic"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		176,
	],

	hp: 80,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Togepi",
		'fr-fr': "Togepi",
		'es-es': "Togepi",
		'it-it': "Togepi",
		'pt-br': "Togepi",
		'de-de': "Togepi"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Go Fetch",
				'fr-fr': "Récup'",
				'es-es': "Ir a Buscar",
				'it-it': "Riporto",
				'pt-br': "Vá Buscar",
				'de-de': "Herbeischaffen"
			},
			effect: {
				'en-us': "Shuffle 3 basic Energy cards from your discard pile into your deck.",
				'fr-fr': "Mélangez 3 cartes Énergie de base de votre pile de défausse avec votre deck.",
				'es-es': "Pon 3 cartas de Energía Básica de tu pila de descartes en tu baraja y barájalas todas.",
				'it-it': "Rimischia tre carte Energia base dalla tua pila degli scarti nel tuo mazzo.",
				'pt-br': "Embaralhe 3 cards de Energia básica da sua pilha de descarte no seu baralho.",
				'de-de': "Mische 3 Basis-Energiekarten aus deinem Ablagestapel in dein Deck."
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fairy Wind",
				'fr-fr': "Vent Féérique",
				'es-es': "Viento Feérico",
				'it-it': "Vento di Fata",
				'pt-br': "Vento de Fada",
				'de-de': "Feenbrise"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They say that it will appear before kindhearted, caring people and shower them with happiness.",
	},

	thirdParty: {
		cardmarket: 282712,
		tcgplayer: 98080
	}
}

export default card
