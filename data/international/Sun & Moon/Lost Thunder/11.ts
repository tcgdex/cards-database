import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Hoppip",
		'fr-fr': "Granivol",
		'es-es': "Hoppip",
		'it-it': "Hoppip",
		'pt-br': "Hoppip",
		'de-de': "Hoppspross"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		187,
	],

	hp: 30,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
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
				'en-us': "Search your deck for Hoppip and put it onto your Bench. Then, shuffle your deck.",
				'fr-fr': "Cherchez Granivol dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 Hoppip y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo un Hoppip e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por Hoppip no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach Hoppspross und lege es auf deine Bank. Mische anschließend dein Deck."
			},

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
		'en-us': "It drifts on winds. It is said that when Hoppip gather in fields and mountains, spring is on the way.",
	},

	thirdParty: {
		cardmarket: 365578,
		tcgplayer: 178808
	}
}

export default card
