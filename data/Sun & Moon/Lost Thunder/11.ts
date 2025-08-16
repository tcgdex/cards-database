import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Hoppip",
		fr: "Granivol",
		es: "Hoppip",
		it: "Hoppip",
		pt: "Hoppip",
		de: "Hoppspross"
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
				en: "Multiply",
				fr: "Multiplication",
				es: "Multiplicar",
				it: "Moltiplicazione",
				pt: "Multiplicar",
				de: "Vervielfachung"
			},
			effect: {
				en: "Search your deck for Hoppip and put it onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez Granivol dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 Hoppip y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo un Hoppip e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por Hoppip no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach Hoppspross und lege es auf deine Bank. Mische anschließend dein Deck."
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

	thirdParty: {
		cardmarket: 365578,
		tcgplayer: 178808
	}
}

export default card
