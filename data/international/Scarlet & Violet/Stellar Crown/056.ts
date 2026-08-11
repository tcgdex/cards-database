import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [921],
	set: Set,

	name: {
		'en-us': "Pawmi",
		'fr-fr': "Pohm",
		'es-es': "Pawmi",
		'it-it': "Pawmi",
		'pt-br': "Pawmi",
		'de-de': "Pamo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Targeted Spark",
			'fr-fr': "Étincelle Ciblée",
			'es-es': "Chispa Direccionada",
			'it-it': "Scintilla Mirata",
			'pt-br': "Faísca na Mira",
			'de-de': "Gezielter Funke"
		},

		effect: {
			'en-us': "This attack does 20 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 20 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 20 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 20 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 20 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785910,
				tcgplayer: 567282
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785910,
				tcgplayer: 567282
			}
		},
	],

	illustrator: "Natsumi Yoshida",

}

export default card
