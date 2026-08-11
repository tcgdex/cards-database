import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "M Manectric EX",
		'fr-fr': "M-Élecsprint EX",
		'es-es': "M-Manectric EX",
		'it-it': "M Manectric EX",
		'pt-br': "M-Manectric EX",
		'de-de': "M Voltenso EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		310,
	],

	hp: 210,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Manectric-EX",
		'fr-fr': "Élecsprint-EX",
		'es-es': "Manectric-EX",
		'it-it': "Manectric-EX",
		'pt-br': "Manectric-EX",
		'de-de': "Voltenso-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Turbo Bolt",
				'fr-fr': "Éclair Turbo",
				'es-es': "Turborrayo",
				'it-it': "Turbobolide",
				'pt-br': "Raio Turbinado",
				'de-de': "Turboblitz"
			},
			effect: {
				'en-us': "Attach 2 basic Energy cards from your discard pile to 1 of your Benched Pokémon.",
				'fr-fr': "Attachez 2 cartes Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
				'es-es': "Une 2 cartas de Energía Básica de tu pila de descartes a 1 de tus Pokémon en Banca.",
				'it-it': "Assegna a uno dei tuoi Pokémon in panchina due carte Energia base dalla tua pila degli scarti.",
				'pt-br': "Ligue 2 cards de Energia básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				'de-de': "Lege 2 Basis-Energiekarten von deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
			},
			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 0,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 94157
	}
}

export default card
