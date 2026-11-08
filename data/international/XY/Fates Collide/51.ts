import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Carbink BREAK",
		'fr-fr': "Strassie TURBO",
		'es-es': "Carbink TURBO",
		'it-it': "Carbink TURBO",
		'pt-br': "Carbink TURBO",
		'de-de': "Rocara-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		703,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Carbink",
		'fr-fr': "Strassie",
		'es-es': "Carbink",
		'it-it': "Carbink",
		'pt-br': "Carbink",
		'de-de': "Rocara"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Diamond Gift",
				'fr-fr': "Cadeau de Diamant",
				'es-es': "Regalo Diamante",
				'it-it': "Dono Diamante",
				'pt-br': "Presente de Diamante",
				'de-de': "Diamantgeschenk"
			},
			effect: {
				'en-us': "Attach 2 Energy cards from your discard pile to 1 of your Fighting Pokémon.",
				'fr-fr': "Attachez 2 cartes Énergie de votre pile de défausse à l'un de vos Pokémon Fighting.",
				'es-es': "Une 2 cartas de Energía de tu pila de descartes a 1 de tus Pokémon Fighting.",
				'it-it': "Assegna a uno dei tuoi Pokémon Fighting due carte Energia dalla tua pila degli scarti.",
				'pt-br': "Ligue 2 cards de Energia da sua pilha de descarte a 1 dos seus Pokémon Fighting.",
				'de-de': "Lege 2 Energiekarten aus deinem Ablagestapel an 1 deiner Fighting-Pokémon an."
			},
			damage: 20,

		}
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 289872,
		tcgplayer: 117520
	}
}

export default card
