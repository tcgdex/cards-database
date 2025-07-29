import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Weedle",
		fr: "Aspicot",
		es: "Weedle",
		it: "Weedle",
		pt: "Weedle",
		de: "Hornliu"
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
				en: "Multiply",
				fr: "Multiplication",
				es: "Multiplicar",
				it: "Moltiplicazione",
				pt: "Multiplicar",
				de: "Vervielfachung"
			},
			effect: {
				en: "Search your deck for Weedle and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez Aspicot dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 Weedle y ponlo en tu Banca. Baraja las cartas de tu baraja después.",
				it: "Cerca Weedle nel tuo mazzo e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure em seu baralho por Weedle e coloque-o no seu Banco. Em seguida, embaralhe seus cards.",
				de: "Durchsuche dein Deck nach Hornliu und lege es auf deine Bank. Mische anschließend dein Deck."
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

	thirdParty: {
		cardmarket: 273532
	}
}

export default card
