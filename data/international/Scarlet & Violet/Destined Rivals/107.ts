import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [749],
	set: Set,

	name: {
		'en-us': "Mudbray",
		'fr-fr': "Tiboudet",
		'de-de': "Pampuli",
		'it-it': "Mudbray",
		'es-es': "Mudbray",
		'pt-br': "Mudbray",
		'es-mx': "Mudbray"
	},


	illustrator: "Aliya Chen",

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Running Charge",
			'fr-fr': "Assaut Élancé",
			'de-de': "Sturmangriff",
			'it-it': "Carica Scattante",
			'es-es': "Carga Impulso",
			'pt-br': "Carga em Disparada",
			'es-mx': "Carga Encarrerada"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 40 damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 40 dégâts pour chaque côté face.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 40 danni ogni volta che esce testa.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 40 puntos de daño por cada cara.",
			'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 40 pontos de dano para cada cara.",
			'es-mx': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 40 puntos de daño por cada cara."
		},

		damage: "40×"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825981,
				tcgplayer: 632915
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825981,
				tcgplayer: 632915
			}
		},
	],
}

export default card
