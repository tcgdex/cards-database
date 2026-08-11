import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Random Spark",
			'fr-fr': "Étincelle Surprise",
			'es-es': "Chispa al Azar",
			'it-it': "Scintilla Casuale",
			'pt-br': "Fagulha Aleatória",
			'de-de': "Zufälliger Funke"
		},

		effect: {
			'en-us': "This attack does 10 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 10 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 10 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 10 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 10 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "When several of these Pokémon gather, their electricity can build and cause lightning storms.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760681,
				tcgplayer: 542795
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760681,
				tcgplayer: 542795
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 800144,
			}
		},
		{
			type: "holo",
			stamp: ["pokemon-day"],
			thirdParty: {
				cardmarket: 870424,
			}
		},
	],

	illustrator: "kodama",

}

export default card