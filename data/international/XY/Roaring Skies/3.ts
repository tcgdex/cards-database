import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Wurmple",
		'fr-fr': "Chenipotte",
		'es-es': "Wurmple",
		'it-it': "Wurmple",
		'pt-br': "Wurmple",
		'de-de': "Waumpel"
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
				'en-us': "Flock",
				'fr-fr': "Nuée",
				'es-es': "Multitud",
				'it-it': "Frotta",
				'pt-br': "Bando",
				'de-de': "Ausschwärmen"
			},
			effect: {
				'en-us': "Search your deck for Wurmple and put it onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Cherchez Chenipotte dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 Wurmple y ponlo en tu Banca. Baraja las cartas de tu baraja después.",
				'it-it': "Cerca Wurmple nel tuo mazzo e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure em seu baralho por Wurmple e coloque-o no seu Banco. Em seguida, embaralhe seus cards.",
				'de-de': "Durchsuche dein Deck nach Waumpel und lege es auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
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

	description: {
		'en-us': "It lives among the tall grass and in forests. It repels attacks by raising up the spikes on its rear.",
	},

	thirdParty: {
		cardmarket: 282671,
		tcgplayer: 98039
	}
}

export default card
