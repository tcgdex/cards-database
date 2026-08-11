import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [877],
	set: Set,

	name: {
		'en-us': "Morpeko",
		'fr-fr': "Morpeko",
		'es-es': "Morpeko",
		'it-it': "Morpeko",
		'pt-br': "Morpeko",
		'de-de': "Morpeko"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Sanosuke Sakuma",

	description: {
		'en-us': "It carries electrically roasted seeds with it as if they're precious treasures. No matter how much it eats, it always gets hungry again in short order."
	},

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Targeted Spark",
			'fr-fr': "Étincelle Ciblée",
			'de-de': "Gezielter Funke",
			'es-es': "Chispa Direccionada",
			'pt-br': "Faísca na Mira",
			'it-it': "Scintilla Mirata"
		},

		effect: {
			'en-us': "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'es-es': "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582502,
				tcgplayer: 253267
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582502,
				tcgplayer: 253267
			}
		},
	],
}

export default card
