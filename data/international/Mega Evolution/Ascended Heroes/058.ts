import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Voltorb ex",
		'fr-fr': "Voltorbe-ex",
		'es-es': "Voltorb ex",
		'es-mx': "Voltorb ex",
		'de-de': "Voltobal-ex",
		'it-it': "Voltorb-ex",
		'pt-br': "Voltorb ex"
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [100],
	hp: 170,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Hundred-Hitting Ball",
			'fr-fr': "Balle Cent Coups",
			'es-es': "Bola Cien Golpes",
			'es-mx': "Bola Centimoledora",
			'de-de': "Ball der hundert Schläge",
			'it-it': "Palla Cento Colpi",
			'pt-br': "Bola de Cem Golpes"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 100 more damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 100 dégâts supplémentaires pour chaque côté face.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 100 puntos de daño más por cada cara.",
			'es-mx': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 100 puntos de daño más por cada cara.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 100 Schadenspunkte mehr pro Kopf zu.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 100 danni in più ogni volta che esce testa.",
			'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 100 pontos de dano a mais para cada cara."
		},

		damage: "100+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869669,
				tcgplayer: 675870
			}
		}
	],
}

export default card
