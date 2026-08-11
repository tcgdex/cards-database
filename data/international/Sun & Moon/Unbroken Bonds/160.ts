import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Purugly",
		'fr-fr': "Chaffreux",
		'es-es': "Purugly",
		'it-it': "Purugly",
		'pt-br': "Purugly",
		'de-de': "Shnurgarst"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		432,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Glameow",
		'fr-fr': "Chaglam",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Stray Cat Dash",
				'fr-fr': "Fuite du Chat Perdu",
				'es-es': "Carrera Gato Callejero",
				'it-it': "Corsa Randagia",
				'pt-br': "Gato de Rua Veloz",
				'de-de': "Streunerspurt"
			},
			effect: {
				'en-us': "Discard a random card from your opponent’s hand. If this Pokémon evolved from Glameow during this turn, discard 2 cards instead of 1.",
				'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire. Si ce Pokémon a évolué de Chaglam pendant ce tour, défaussez 2 cartes au lieu d’une.",
				'es-es': "Descarta 1 carta aleatoria de la mano de tu rival. Si este Pokémon ha evolucionado de Glameow durante este turno, descarta 2 cartas en vez de 1.",
				'it-it': "Scarta una carta a caso dalla mano del tuo avversario. Se questo Pokémon si è evoluto da Glameow durante questo turno, scarta due carte invece di una.",
				'pt-br': "Descarte 1 carta aleatória da mão do seu oponente. Se este Pokémon evoluiu de Glameow durante esta vez de jogar, descarte 2 cartas ao invés de 1.",
				'de-de': "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel. Wenn sich dieses Pokémon während dieses Zuges aus Charmian entwickelt hat, lege 2 Karten anstelle von 1 Karte auf seinen Ablagestapel."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Lunge Out",
				'fr-fr': "Allonger",
				'es-es': "Arremeter",
				'it-it': "Affondo Lungo",
				'pt-br': "Bote",
				'de-de': "Sprungangriff"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It would claim another Pokémon's nest as its own if it finds a nest sufficiently comfortable.",
	},

	thirdParty: {
		cardmarket: 372448,
		tcgplayer: 189262
	}
}

export default card
