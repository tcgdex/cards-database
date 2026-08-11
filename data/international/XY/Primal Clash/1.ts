import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Weedle",
		'fr-fr': "Aspicot",
		'es-es': "Weedle",
		'it-it': "Weedle",
		'pt-br': "Weedle",
		'de-de': "Hornliu"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		13,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Multiply",
				'fr-fr': "Multiplication",
				'es-es': "Multiplicar",
				'it-it': "Moltiplicazione",
				'pt-br': "Multiplicar",
				'de-de': "Vervielfachung"
			},
			effect: {
				'en-us': "Search your deck for Weedle and put it onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Cherchez Aspicot dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 Weedle y ponlo en tu Banca. Baraja las cartas de tu baraja después.",
				'it-it': "Cerca Weedle nel tuo mazzo e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure em seu baralho por Weedle e coloque-o no seu Banco. Em seguida, embaralhe seus cards.",
				'de-de': "Durchsuche dein Deck nach Hornliu und lege es auf deine Bank. Mische anschließend dein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its poison stinger is very powerful. Its bright-colored body is intended to warn off its enemies.",
	},

	thirdParty: {
		cardmarket: 273532,
		tcgplayer: 95885
	}
}

export default card
