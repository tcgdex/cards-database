import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Drampa",
		'fr-fr': "Draïeul",
		'es-es': "Drampa",
		'it-it': "Drampa",
		'pt-br': "Drampa",
		'de-de': "Sen-Long"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		780,
	],

	hp: 120,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dragon Wisdom",
				'fr-fr': "Sagesse des Dragons",
				'es-es': "Sabiduría de Dragón",
				'it-it': "Saggezza del Drago",
				'pt-br': "Sabedoria de Dragão",
				'de-de': "Drachenweisheit"
			},
			effect: {
				'en-us': "Attach a basic Energy card from your discard pile to 1 of your Dragon Pokémon.",
				'fr-fr': "Attachez une carte Énergie de base de votre pile de défausse à l’un de vos Pokémon Dragon.",
				'es-es': "Une 1 carta de Energía Básica de tu pila de descartes a 1 de tus Pokémon Dragon.",
				'it-it': "Assegna a uno dei tuoi Pokémon Dragon una carta Energia base dalla tua pila degli scarti.",
				'pt-br': "Ligue 1 carta de Energia básica da sua pilha de descarte a 1 dos seus Pokémon Dragon.",
				'de-de': "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an 1 deiner Dragon-Pokémon an."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Voice",
				'fr-fr': "Mégaphone",
				'es-es': "Vozarrón",
				'it-it': "Granvoce",
				'pt-br': "Hipervoz",
				'de-de': "Schallwelle"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This Pokémon is friendly to people and loves children most of all. It comes from deep in the mountains to play with children it likes in town.",
	},

	thirdParty: {
		cardmarket: 363522,
		tcgplayer: 175481
	}
}

export default card
