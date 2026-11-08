import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [693],
	set: Set,

	name: {
		'en-us': "Clawitzer",
		'fr-fr': "Gamblast",
		'es-es': "Clawitzer",
		'it-it': "Clawitzer",
		'pt-br': "Clawitzer",
		'de-de': "Wummer"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Clauncher",
		'fr-fr': "Flingouste",
		'es-es': "Clauncher",
		'it-it': "Clauncher",
		'pt-br': "Clauncher",
		'de-de': "Scampisto"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "tetsuya koizumi",

	description: {
		'en-us': "Its right arm is packed with meat. When its pincer falls off, it's exported to be used as a cooking ingredient."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Snipe Shot",
			'fr-fr': "Tir de Précision",
			'de-de': "Präzisionsschuss",
			'es-es': "Disparo Certero",
			'pt-br': "Tiro Certeiro",
			'it-it': "Tiromirato"
		},

		effect: {
			'en-us': "This attack does 50 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 50 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'es-es': "Este ataque hace 50 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque causa 50 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'it-it': "Questo attacco infligge 50 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Crabhammer",
			'fr-fr': "Pince-Masse",
			'de-de': "Krabbhammer",
			'es-es': "Martillazo",
			'pt-br': "Martelo Caranguejo",
			'it-it': "Martellata"
		},

		damage: 110
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582209,
				tcgplayer: 253225
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582209,
				tcgplayer: 253225
			}
		},
	],
}

export default card
