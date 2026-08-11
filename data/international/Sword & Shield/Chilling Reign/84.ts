import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [739],
	set: Set,

	name: {
		'en-us': "Crabrawler",
		'fr-fr': "Crabagarre",
		'es-es': "Crabrawler",
		'it-it': "Crabrawler",
		'pt-br': "Crabrawler",
		'de-de': "Krabbox"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	attacks: [{
		name: {
			'en-us': "Light Punch",
			'fr-fr': "Poing Léger",
			'es-es': "Puño Ligero",
			'it-it': "Pugnetto",
			'pt-br': "Soco de Luz",
			'de-de': "Leichter Hieb"
		},

		damage: 20,
		cost: ["Fighting"]
	}, {
		name: {
			'en-us': "Double Lariat",
			'fr-fr': "Double Lasso",
			'es-es': "Doble Lazo",
			'it-it': "Doppio Lazzo",
			'pt-br': "Laço Duplo",
			'de-de': "Doppel-Lasso"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 40 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 40 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 40 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu."
		},

		damage: "40×",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "Crabrawler has been known to mistake Exeggutor for a coconut tree and climb it. The enraged Exeggutor shakes it off and stomps it."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567192,
				tcgplayer: 241751
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567192,
				tcgplayer: 241751
			}
		},
	],
}

export default card
