import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [1008],
	set: Set,

	name: {
		'en-us': "Miraidon ex",
		'fr-fr': "Miraidon-ex",
		'es-es': "Miraidon ex",
		'it-it': "Miraidon-ex",
		'pt-br': "Miraidon ex",
		'de-de': "Miraidon-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 220,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Rapid Draw",
			'fr-fr': "Pioche Rapide",
			'es-es': "Robo Rápido",
			'it-it': "Pescalesto",
			'pt-br': "Retirada Rápida",
			'de-de': "Schnellzieher"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'es-es': "Roba 2 cartas.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas.",
			'de-de': "Ziehe 2 Karten."
		},

		damage: 20
	}, {
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			'en-us': "Techno Turbo",
			'fr-fr': "Techno-Turbo",
			'es-es': "Tecno Turbo",
			'it-it': "Tecnoturbo",
			'pt-br': "Turbo Tecnológico",
			'de-de': "Techturbo"
		},

		effect: {
			'en-us': "Attach a Basic {L} Energy card from your discard pile to 1 of your Benched Pokémon.",
			'fr-fr': "Attachez une carte Énergie {L} de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			'es-es': "Une 1 carta de Energía {L} Básica de tu pila de descartes a uno de tus Pokémon en Banca.",
			'it-it': "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base {L} dalla tua pila degli scarti.",
			'pt-br': "Ligue uma carta de Energia {L} Básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			'de-de': "Lege 1 Basis-{L}-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "G",
	suffix: "ex",
	illustrator: "5ban Graphics",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 767569,
				tcgplayer: 593277
			},
		}
	],
}

export default card
