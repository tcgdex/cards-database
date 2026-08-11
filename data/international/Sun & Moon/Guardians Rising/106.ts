import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Rayquaza",
		'fr-fr': "Rayquaza",
		'es-es': "Rayquaza",
		'it-it': "Rayquaza",
		'pt-br': "Rayquaza",
		'de-de': "Rayquaza"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Turbo Storm",
				'fr-fr': "Tempête Turbo",
				'es-es': "Turbotormenta",
				'it-it': "Turbotempesta",
				'pt-br': "Turbotempestade",
				'de-de': "Turbosturm"
			},
			effect: {
				'en-us': "Attach 2 basic Energy cards from your discard pile to 1 of your Benched Pokémon.",
				'fr-fr': "Attachez 2 cartes Énergie de base de votre pile de défausse à l’un de vos Pokémon de Banc.",
				'es-es': "Une 2 cartas de Energía Básica de tu pila de descartes a 1 de tus Pokémon en Banca.",
				'it-it': "Assegna a uno dei tuoi Pokémon in panchina due carte Energia base dalla tua pila degli scarti.",
				'pt-br': "Ligue 2 cartas de Energia básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				'de-de': "Lege 2 Basis-Energiekarten aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
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
				'en-us': "Dragon Claw",
				'fr-fr': "Dracogriffe",
				'es-es': "Garra Dragón",
				'it-it': "Dragartigli",
				'pt-br': "Garra de Dragão",
				'de-de': "Drachenklaue"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lives in the ozone layer far above the clouds and cannot be seen from the ground.",
	},

	thirdParty: {
		cardmarket: 297558,
		tcgplayer: 131024
	}
}

export default card
