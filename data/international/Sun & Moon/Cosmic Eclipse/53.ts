import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Kyogre",
		'fr-fr': "Kyogre",
		'es-es': "Kyogre",
		'it-it': "Kyogre",
		'pt-br': "Kyogre",
		'de-de': "Kyogre"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		382,
	],

	hp: 130,

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
				'en-us': "High Water",
				'fr-fr': "Hautes Eaux",
				'es-es': "Crecida Acuática",
				'it-it': "Acqua Alta",
				'pt-br': "Maré Alta",
				'de-de': "Flutwasser"
			},
			effect: {
				'en-us': "Attach 2 Water Energy cards from your discard pile to 1 of your Pokémon.",
				'fr-fr': "Attachez 2 cartes Énergie Water de votre pile de défausse à l’un de vos Pokémon.",
				'es-es': "Une 2 cartas de Energía Water de tu pila de descartes a 1 de tus Pokémon.",
				'it-it': "Assegna a uno dei tuoi Pokémon due carte Energia Water dalla tua pila degli scarti.",
				'pt-br': "Ligue 2 cartas de Energia Water da sua pilha de descarte a 1 dos seus Pokémon.",
				'de-de': "Lege 2 Water-Energiekarten aus deinem Ablagestapel an 1 deiner Pokémon an."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Swirling Waves",
				'fr-fr': "Vagues Tourbillonnantes",
				'es-es': "Remolino de Olas",
				'it-it': "Turbine d’Onde",
				'pt-br': "Turbilhão de Ondas",
				'de-de': "Wellenwirbel"
			},
			effect: {
				'en-us': "Discard an Energy from this Pokémon.",
				'fr-fr': "Défaussez une Énergie de ce Pokémon.",
				'es-es': "Descarta 1 Energía de este Pokémon.",
				'it-it': "Scarta un’Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte 1 Energia deste Pokémon.",
				'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "A mythical Pokémon said to have swelled the seas with rain and tidal waves. It battled with Groudon.",
	},

	thirdParty: {
		cardmarket: 407914,
		tcgplayer: 201229
	}
}

export default card
