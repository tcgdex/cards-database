import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Starly",
		'fr-fr': "Étourmi",
		'es-es': "Starly",
		'it-it': "Starly",
		'pt-br': "Starly",
		'de-de': "Staralili"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		396,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Call for Pals",
				'fr-fr': "Appel aux Copains",
				'es-es': "Llamar a los Colegas",
				'it-it': "Cerca Compagni",
				'pt-br': "Chamar os Amigos",
				'de-de': "Kumpanenruf"
			},
			effect: {
				'en-us': "Search your deck for as many Starly as you like and put them onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck autant d'Étourmi que vous voulez et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja tantos Starly como quieras y ponlos en tu Banca. Baraja las cartas de tu baraja después.",
				'it-it': "Cerca nel tuo mazzo tutti gli Starly che vuoi e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure em seu baralho tantos Starly quanto desejar e coloque-os no seu Banco. Em seguida, embaralhe seus cards.",
				'de-de': "Durchsuche dein Deck nach beliebig vielen Staralili und lege sie auf deine Bank. Mische anschließend dein Deck."
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
		'en-us': "They flock around mountains and fields, chasing after bug Pokémon. Their singing is noisy and annoying.",
	},

	thirdParty: {
		cardmarket: 286371,
		tcgplayer: 107244
	}
}

export default card
