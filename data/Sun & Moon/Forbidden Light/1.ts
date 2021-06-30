import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
		es: "Exeggcute",
		it: "Exeggcute",
		pt: "Exeggcute",
		de: "Owei"
	},
	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		102,
	],
	hp: 40,
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
				en: "Multiply",
				fr: "Multiplication",
				es: "Multiplicar",
				it: "Moltiplicazione",
				pt: "Multiplicar",
				de: "Vervielfachung"
			},
			effect: {
				en: "Search your deck for Exeggcute and put it onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez Noeunoeuf dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 Exeggcute y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo un Exeggcute e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por Exeggcute no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach Owei und lege es auf deine Bank. Mische anschließend dein Deck."
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



}

export default card
