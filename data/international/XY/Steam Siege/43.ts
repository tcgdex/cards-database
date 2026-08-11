import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Nidoran♂",
		'fr-fr': "Nidoran♂",
		'es-es': "Nidoran♂",
		'it-it': "Nidoran♂",
		'pt-br': "Nidoran♂",
		'de-de': "Nidoran♂"
	},
	illustrator: "Hasuno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		32,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Come Along",
				'fr-fr': "Compagnon",
				'es-es': "Acompáñame",
				'it-it': "Rimorchiare",
				'pt-br': "Acompanha-me",
				'de-de': "Komm mit!"
			},
			effect: {
				'en-us': "Search your deck for Nidoran♀ and put it onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Cherchez Nidoran♀ dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 Nidoran♀ y ponlo en tu Banca. Baraja las cartas de tu baraja después.",
				'it-it': "Cerca Nidoran♀ nel tuo mazzo e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure em seu baralho por Nidoran♀ e coloque-a no seu Banco. Em seguida, embaralhe seus cards.",
				'de-de': "Durchsuche dein Deck nach Nidoran♀ und lege es auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Peck",
				'fr-fr': "Picpic",
				'es-es': "Picotazo",
				'it-it': "Beccata",
				'pt-br': "Bicada",
				'de-de': "Schnabel"
			},

			damage: 20,

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
		'en-us': "Its large ears are flapped like wings when it is listening to distant sounds. It extends toxic barbs when angered.",
	},
}

export default card
