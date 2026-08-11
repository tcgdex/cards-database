import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [207],
	set: Set,

	name: {
		'en-us': "Gligar",
		'fr-fr': "Scorplane",
		'es-es': "Gligar",
		'it-it': "Gligar",
		'pt-br': "Gligar",
		'de-de': "Skorgla"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Cyclone Pincers",
			'fr-fr': "Pinces Cyclone",
			'es-es': "Pinzas Ciclón",
			'it-it': "Chele Cicloniche",
			'pt-br': "Pinças de Ciclone",
			'de-de': "Kneiferwirbel"
		},

		effect: {
			'en-us': "Flip 4 coins. This attack does 10 damage for each heads.",
			'fr-fr': "Lancez 4 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			'es-es': "Lanza 4 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			'pt-br': "Jogue 4 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			'de-de': "Wirf 4 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		},

		damage: "10×"
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674107,
				tcgplayer: 283983
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674107,
				tcgplayer: 283983
			}
		},
	],
}

export default card
