import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Pancham",
		'fr-fr': "Pandespiègle",
		'es-es': "Pancham",
		'it-it': "Pancham",
		'pt-br': "Pancham",
		'de-de': "Pam-Pam"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		674,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bad-Influence Evolution",
				'fr-fr': "Évolution Influençable",
				'es-es': "Evolución por Mal Camino",
				'it-it': "Evoluzione Malacompagnia",
				'pt-br': "Evolução de Má Influência",
				'de-de': "Schiefe-Bahn-Entwicklung"
			},
			effect: {
				'en-us': "If you have any Darkness Pokémon on your Bench, search your deck for a card that evolves from this Pokémon and put it onto this Pokémon. (This counts as evolving this Pokémon.) Shuffle your deck afterward.",
				'fr-fr': "Si vous avez un Pokémon Darkness sur votre Banc, cherchez dans votre deck une carte Évolution de ce Pokémon et placez-la sur ce Pokémon. (Cela équivaut à faire évoluer ce Pokémon.) Mélangez ensuite votre deck.",
				'es-es': "Si tienes algún Pokémon Darkness en tu Banca, busca en tu baraja 1 carta que evolucione de este Pokémon y ponla sobre él. (Esto equivale a hacer evolucionar a este Pokémon). Baraja las cartas de tu baraja después.",
				'it-it': "Se hai dei Pokémon Darkness in panchina, cerca nel tuo mazzo una carta che si evolve da questo Pokémon e metticela sopra (quest'azione vale come evoluzione del Pokémon). Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Se houver algum Pokémon Darkness em seu Banco, procure em seu baralho um card que evolua deste Pokémon e coloque-o nesse Pokémon. (Isso conta como evoluir esse Pokémon.) Em seguida, embaralhe seus cards.",
				'de-de': "Wenn du mindestens 1 Darkness-Pokémon auf deiner Bank hast, durchsuche dein Deck nach einer Karte, zu der sich dieses Pokémon entwickelt, und lege sie auf dieses Pokémon (dies zählt als Entwicklung dieses Pokémon). Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Confront",
				'fr-fr': "Confrontation",
				'es-es': "Confrontar",
				'it-it': "Confronto",
				'pt-br': "Confrontar",
				'de-de': "Konfrontieren"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It does its best to be taken seriously by its enemies, but its glare is not sufficiently intimidating. Chewing on a leaf is its trademark.",
	},

	thirdParty: {
		cardmarket: 281723,
		tcgplayer: 92236
	}
}

export default card
