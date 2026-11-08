import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Landorus",
		'fr-fr': "Démétéros",
		'es-es': "Landorus",
		'it-it': "Landorus",
		'pt-br': "Landorus",
		'de-de': "Demeteros"
	},

	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		645,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Shout of Power",
				'fr-fr': "Cri de Puissance",
				'es-es': "Grito de Poder",
				'it-it': "Urlotonante",
				'pt-br': "Grito de Poder",
				'de-de': "Mächtiger Aufruf"
			},
			effect: {
				'en-us': "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
				'fr-fr': "Attachez une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
				'es-es': "Une 1 carta de Energía Básica de tu pila de descartes a 1 de tus Pokémon en Banca.",
				'it-it': "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base dalla tua pila degli scarti.",
				'pt-br': "Ligue um card de Energia básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				'de-de': "Lege 1 Basis-Energiekarte von deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Sky Lariat",
				'fr-fr': "Lasso Céleste",
				'es-es': "Lazo Celestial",
				'it-it': "Lazoaereo",
				'pt-br': "Laço Celeste",
				'de-de': "Sensensturz"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Lands visited by Landorus grant such bountiful crops that it has been hailed as \"The Guardian of the Fields.\"",
	},

	thirdParty: {
		cardmarket: 281722,
		tcgplayer: 92235
	}
}

export default card
