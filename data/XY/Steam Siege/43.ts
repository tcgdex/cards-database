import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Nidoran♂",
		fr: "Nidoran♂",
		es: "Nidoran♂",
		it: "Nidoran♂",
		pt: "Nidoran♂",
		de: "Nidoran♂"
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
				en: "Come Along",
				fr: "Compagnon",
				es: "Acompáñame",
				it: "Rimorchiare",
				pt: "Acompanha-me",
				de: "Komm mit!"
			},
			effect: {
				en: "Search your deck for Nidoran♀ and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez Nidoran♀ dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 Nidoran♀ y ponlo en tu Banca. Baraja las cartas de tu baraja después.",
				it: "Cerca Nidoran♀ nel tuo mazzo e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure em seu baralho por Nidoran♀ e coloque-a no seu Banco. Em seguida, embaralhe seus cards.",
				de: "Durchsuche dein Deck nach Nidoran♀ und lege es auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic",
				es: "Picotazo",
				it: "Beccata",
				pt: "Bicada",
				de: "Schnabel"
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



}

export default card
