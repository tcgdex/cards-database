import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Braviary",
		'fr-fr': "Gueriaigle",
		'es-es': "Braviary",
		'it-it': "Braviary",
		'pt-br': "Braviary",
		'de-de': "Washakwil"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		628,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Rufflet",
		'fr-fr': "Furaiglon",
		'es-es': "Rufflet",
		'it-it': "Rufflet",
		'pt-br': "Rufflet",
		'de-de': "Geronimatz"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wing Attack",
				'fr-fr': "Cru-Aile",
				'es-es': "Ataque Ala",
				'it-it': "Attacco d'Ala",
				'pt-br': "Ataque de Asa",
				'de-de': "Flügelschlag"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dual Cut",
				'fr-fr': "Coupe Double",
				'es-es': "Corte Dual",
				'it-it': "Doppiotaglio",
				'pt-br': "Cortada Dupla",
				'de-de': "Doppel-Zerschneider"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 80 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 80 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 80 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 80 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 80 de danos vezes o número de caras.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 80 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "80×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "They fight for their friends without any thought about danger to themselves. One can carry a car while flying.",
	},

	thirdParty: {
		cardmarket: 286376,
		tcgplayer: 107249
	}
}

export default card
