import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss",
		'es-es': "Slowpoke",
		'it-it': "Slowpoke",
		'pt-br': "Slowpoke",
		'de-de': "Flegmon"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		79,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d'Boule",
				'es-es': "Golpe Cabeza",
				'it-it': "Bottintesta",
				'pt-br': "Cabeçada",
				'de-de': "Kopfnuss"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tail Lure",
				'fr-fr': "Queue Attrayante",
				'es-es': "Cebo Cola",
				'it-it': "Coda Esca",
				'pt-br': "Encanto de Cauda",
				'de-de': "Schöner Schweif"
			},
			effect: {
				'en-us': "Search your deck for a Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Baraja las cartas de tu baraja después.",
				'it-it': "Cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure em seu baralho um Pokémon, revele-o e coloque-o em sua mão. Em seguida, embaralhe seus cards.",
				'de-de': "Durchsuche dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It lazes vacantly near water. If something bites its tail, it won't even notice for a whole day.",
	},

	thirdParty: {
		cardmarket: 288194,
		tcgplayer: 111522
	}
}

export default card
