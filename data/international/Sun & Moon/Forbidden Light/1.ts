import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf",
		'es-es': "Exeggcute",
		'it-it': "Exeggcute",
		'pt-br': "Exeggcute",
		'de-de': "Owei"
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
				'en-us': "Multiply",
				'fr-fr': "Multiplication",
				'es-es': "Multiplicar",
				'it-it': "Moltiplicazione",
				'pt-br': "Multiplicar",
				'de-de': "Vervielfachung"
			},
			effect: {
				'en-us': "Search your deck for Exeggcute and put it onto your Bench. Then, shuffle your deck.",
				'fr-fr': "Cherchez Noeunoeuf dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 Exeggcute y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo un Exeggcute e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por Exeggcute no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach Owei und lege es auf deine Bank. Mische anschließend dein Deck."
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
		'en-us': "Six of them together form a full-fledged Pokémon. It's often hunted by Crabrawler, but uses psychokinesis to drive it off.",
	},

	thirdParty: {
		cardmarket: 355522,
		tcgplayer: 165648
	}
}

export default card
