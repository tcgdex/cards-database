import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

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

	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Scrappy Spark",
			'fr-fr': "Étincelle Querelleuse",
			'es-es': "Chispa Intrépida",
			'it-it': "Scintilla Combattiva",
			'pt-br': "Faísca Obstinada",
			'de-de': "Rauffunke"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño más por cada cara.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni in più ogni volta che esce testa.",
			'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 30 pontos de dano a mais para cada cara.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 30 Schadenspunkte mehr pro Kopf zu."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
	illustrator: "Jiro Sasumo",
	description: {
		'en-us': "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.",
	},
	variants: [
		{
			type: "normal",
			stamp: ["player-rewards-program"],
			thirdParty: {
				cardmarket: 740411,
				tcgplayer: 528365
			},
		},
		{
			type: "normal",
			stamp: ["asia-2023-24"],
			thirdParty: {
				cardmarket: 726923,
				tcgplayer: 681225
			},
		}
	],
}

export default card
