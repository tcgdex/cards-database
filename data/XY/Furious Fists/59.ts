import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Pancham",
		fr: "Pandespiègle",
		es: "Pancham",
		it: "Pancham",
		pt: "Pancham",
		de: "Pam-Pam"
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
				en: "Bad-Influence Evolution",
				fr: "Évolution Influençable",
				es: "Evolución por Mal Camino",
				it: "Evoluzione Malacompagnia",
				pt: "Evolução de Má Influência",
				de: "Schiefe-Bahn-Entwicklung"
			},
			effect: {
				en: "If you have any Darkness Pokémon on your Bench, search your deck for a card that evolves from this Pokémon and put it onto this Pokémon. (This counts as evolving this Pokémon.) Shuffle your deck afterward.",
				fr: "Si vous avez un Pokémon Darkness sur votre Banc, cherchez dans votre deck une carte Évolution de ce Pokémon et placez-la sur ce Pokémon. (Cela équivaut à faire évoluer ce Pokémon.) Mélangez ensuite votre deck.",
				es: "Si tienes algún Pokémon Darkness en tu Banca, busca en tu baraja 1 carta que evolucione de este Pokémon y ponla sobre él. (Esto equivale a hacer evolucionar a este Pokémon). Baraja las cartas de tu baraja después.",
				it: "Se hai dei Pokémon Darkness in panchina, cerca nel tuo mazzo una carta che si evolve da questo Pokémon e metticela sopra (quest'azione vale come evoluzione del Pokémon). Poi rimischia le carte del tuo mazzo.",
				pt: "Se houver algum Pokémon Darkness em seu Banco, procure em seu baralho um card que evolua deste Pokémon e coloque-o nesse Pokémon. (Isso conta como evoluir esse Pokémon.) Em seguida, embaralhe seus cards.",
				de: "Wenn du mindestens 1 Darkness-Pokémon auf deiner Bank hast, durchsuche dein Deck nach einer Karte, zu der sich dieses Pokémon entwickelt, und lege sie auf dieses Pokémon (dies zählt als Entwicklung dieses Pokémon). Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Confront",
				fr: "Confrontation",
				es: "Confrontar",
				it: "Confronto",
				pt: "Confrontar",
				de: "Konfrontieren"
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



}

export default card
