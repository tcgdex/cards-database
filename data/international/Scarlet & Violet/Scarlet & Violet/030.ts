import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [58],
	set: Set,

	name: {
		'en-us': "Growlithe",
		'fr-fr': "Caninos",
		'es-es': "Growlithe",
		'it-it': "Growlithe",
		'pt-br': "Growlithe",
		'de-de': "Fukano"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Relentless Flames",
			'fr-fr': "Flammes Incessantes",
			'es-es': "Llamas Implacables",
			'it-it': "Fiammeperenni",
			'pt-br': "Chamas Incansáveis",
			'de-de': "Unermüdliche Flammen"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 30 damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 30 dégâts pour chaque côté face.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño por cada cara.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni ogni volta che esce testa.",
			'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 30 pontos de dano para cada cara.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
		},

		damage: "30×"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "kawayoo",

	description: {
		'en-us': "It's very friendly and faithful to people. It will try to repel enemies by barking and biting.",
	},

	thirdParty: {
        cardmarket: 702326,
        tcgplayer: 487869
    }
}

export default card