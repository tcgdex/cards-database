import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Wurmple",
		fr: "Chenipotte",
		es: "Wurmple",
		it: "Wurmple",
		pt: "Wurmple",
		de: "Waumpel"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		265,
	],

	hp: 60,

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
				en: "Flock",
				fr: "Nuée",
				es: "Multitud",
				it: "Frotta",
				pt: "Bando",
				de: "Ausschwärmen"
			},
			effect: {
				en: "Search your deck for Wurmple and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez Chenipotte dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 Wurmple y ponlo en tu Banca. Baraja las cartas de tu baraja después.",
				it: "Cerca Wurmple nel tuo mazzo e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure em seu baralho por Wurmple e coloque-o no seu Banco. Em seguida, embaralhe seus cards.",
				de: "Durchsuche dein Deck nach Waumpel und lege es auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				es: "Placaje",
				it: "Azione",
				pt: "Investida",
				de: "Tackle"
			},

			damage: 20,

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
		cardmarket: 282671
	}
}

export default card
