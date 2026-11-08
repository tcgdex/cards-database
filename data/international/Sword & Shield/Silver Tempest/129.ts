import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [147],
	set: Set,

	name: {
		'en-us': "Dratini",
		'fr-fr': "Minidraco",
		'es-es': "Dratini",
		'it-it': "Dratini",
		'pt-br': "Dratini",
		'de-de': "Dratini"
	},

	illustrator: "kurumitsu",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Slam",
			'fr-fr': "Souplesse",
			'es-es': "Atizar",
			'it-it': "Schianto",
			'pt-br': "Pancada Brusca",
			'de-de': "Slam"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 30 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 30 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
		},

		damage: "30×"
	}],

	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "Dratini dwells near bodies of rapidly flowing water, such as the plunge pools of waterfalls. As it grows, Dratini will shed its skin many times.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682176,
				tcgplayer: 451782
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682176,
				tcgplayer: 451782
			}
		},
	],
}

export default card
