import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Zekrom",
		'fr-fr': "Zekrom",
		'es-es': "Zekrom",
		'it-it': "Zekrom",
		'pt-br': "Zekrom",
		'de-de': "Zekrom"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		644,
	],

	hp: 130,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Energy Stream",
				'fr-fr': "Courant d'Énergie",
				'es-es': "Torrente de Energía",
				'it-it': "Getto d'Energia",
				'pt-br': "Fluxo de Energia",
				'de-de': "Energiestrom"
			},
			effect: {
				'en-us': "Attach a basic Energy card from your discard pile to this Pokémon.",
				'fr-fr': "Attachez une carte Énergie de base de votre pile de défausse à ce Pokémon.",
				'es-es': "Une 1 carta de Energía Básica de tu pila de descartes a este Pokémon.",
				'it-it': "Assegna a questo Pokémon una carta Energia base dalla tua pila degli scarti.",
				'pt-br': "Ligue um card de Energia básica da sua pilha de descarte a este Pokémon.",
				'de-de': "Lege 1 Basis-Energiekarte von deinem Ablagestapel an dieses Pokémon an."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Electric Ball",
				'fr-fr': "Boule de Foudre",
				'es-es': "Bola Eléctrica",
				'it-it': "Lamposfera",
				'pt-br': "Bola de Eletricidade",
				'de-de': "Stromball"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Concealing itself in lightning clouds, it flies throughout the Unova region. It creates electricity in its tail.",
	},

	thirdParty: {
		cardmarket: 282732,
		tcgplayer: 98100
	}
}

export default card
