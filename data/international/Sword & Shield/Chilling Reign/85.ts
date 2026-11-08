import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [740],
	set: Set,

	name: {
		'en-us': "Crabominable",
		'fr-fr': "Crabominable",
		'es-es': "Crabominable",
		'it-it': "Crabominable",
		'pt-br': "Crabominable",
		'de-de': "Krawell"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Crabrawler",
		'fr-fr': "Crabagarre",
		'es-es': "Crabrawler",
		'it-it': "Crabrawler",
		'pt-br': "Crabrawler",
		'de-de': "Krabbox"
	},

	attacks: [{
		name: {
			'en-us': "Double Lariat",
			'fr-fr': "Double Lasso",
			'es-es': "Doble Lazo",
			'it-it': "Doppio Lazzo",
			'pt-br': "Laço Duplo",
			'de-de': "Doppel-Lasso"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 90 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 90 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 90 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 90 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 90 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 90 Schadenspunkte pro Kopf zu."
		},

		damage: "90×",
		cost: ["Fighting", "Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Crabhammer",
			'fr-fr': "Pince-Masse",
			'es-es': "Martillazo",
			'it-it': "Martellata",
			'pt-br': "Martelo Caranguejo",
			'de-de': "Krabbhammer"
		},

		damage: 130,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "Before it stops to think, it just starts pummeling. There are records of its turning back avalanches with a flurry of punches."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567193,
				tcgplayer: 241752
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567193,
				tcgplayer: 241752
			}
		},
	],
}

export default card
