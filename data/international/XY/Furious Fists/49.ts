import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Hitmontop",
		'fr-fr': "Kapoera",
		'es-es': "Hitmontop",
		'it-it': "Hitmontop",
		'pt-br': "Hitmontop",
		'de-de': "Kapoera"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		237,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Quick Draw",
				'fr-fr': "Pioche Rapide",
				'es-es': "Robo Rápido",
				'it-it': "Pescalesto",
				'pt-br': "Retirada Rápida",
				'de-de': "Schnellzieher"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'es-es': "Roba 1 carta.",
				'it-it': "Pesca una carta.",
				'pt-br': "Compre um card.",
				'de-de': "Ziehe 1 Karte."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Helicoptero",
				'fr-fr': "Helicoptero",
				'es-es': "Helicóptero",
				'it-it': "Helicoptero",
				'pt-br': "Helicóptero",
				'de-de': "Helicoptero"
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Scambia questo Pokémon con uno della tua panchina.",
				'pt-br': "Troque este Pokémon por 1 dos seus Pokémon do Banco.",
				'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It fights while spinning like a top. The centrifugal force boosts its destructive power by 10.",
	},

	thirdParty: {
		cardmarket: 281713,
		tcgplayer: 92226
	}
}

export default card
