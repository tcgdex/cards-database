import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tyrogue",
		'fr-fr': "Debugant",
		'de-de': "Rabauz",
		'it-it': "Tyrogue",
		'es-es': "Tyrogue",
		'pt-br': "Tyrogue",
		'es-mx': "Tyrogue"
	},

	illustrator: "OKUBO",
	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [236],

	attacks: [{
		name: {
			'en-us': "Pow-Pow Punching",
			'fr-fr': "Frappe Bim Bim",
			'de-de': "Haui-Aui-Hiebe",
			'it-it': "Pugni Pow Pow",
			'es-es': "Puñetazo Zas Zas",
			'pt-br': "Soco Soco Bate Bate",
			'es-mx': "Chiquipaliza"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 30 Schadenspunkte mehr pro Kopf zu.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni in più ogni volta che esce testa.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño más por cada cara.",
			'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 30 pontos de dano a mais para cada cara.",
			'es-mx': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño más por cada cara."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851142,
				tcgplayer: 654410
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851142,
				tcgplayer: 654410
			}
		},
	],
}

export default card
