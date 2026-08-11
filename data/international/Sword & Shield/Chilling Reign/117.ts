import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [233],
	set: Set,

	name: {
		'en-us': "Porygon2",
		'fr-fr': "Porygon2",
		'es-es': "Porygon2",
		'it-it': "Porygon2",
		'pt-br': "Porygon2",
		'de-de': "Porygon2"
	},

	illustrator: "Nagomi Nijo",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Porygon",
		'fr-fr': "Porygon",
		'es-es': "Porygon",
		'it-it': "Porygon",
		'pt-br': "Porygon",
		'de-de': "Porygon"
	},

	attacks: [{
		name: {
			'en-us': "Tri Attack",
			'fr-fr': "Triplattaque",
			'es-es': "Triataque",
			'it-it': "Tripletta",
			'pt-br': "Triataque",
			'de-de': "Triplette"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 30 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			'es-es': "Lanza 3 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 30 pontos de dano para cada cara.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
		},

		damage: "30×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "Even though it doesn't die in the vacuum of space, it can't move around very well in zero gravity."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567225,
				tcgplayer: 241794
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567225,
				tcgplayer: 241794
			}
		},
	],
}

export default card
