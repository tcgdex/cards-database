import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Quilladin",
		'fr-fr': "Boguérisse",
		'es-es': "Quilladin",
		'it-it': "Quilladin",
		'pt-br': "Quilladin",
		'de-de': "Igastarnish"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		651,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Chespin",
		'fr-fr': "Marisson",
		'es-es': "Chespin",
		'it-it': "Chespin",
		'pt-br': "Chespin",
		'de-de': "Igamaro"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Pin Missile",
				'fr-fr': "Dard-Nuée",
				'es-es': "Pin Misil",
				'it-it': "Missilspillo",
				'pt-br': "Míssil de Espinhos",
				'de-de': "Nadelrakete"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 40 damage times the number of heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 4 monedas. Este ataque hace 40 puntos de daño por cada cara.",
				'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
				'pt-br': "Jogue 4 moedas. Este ataque causa 40 de danos vezes o número de caras.",
				'de-de': "Wirf 4 Münzen. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "40×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "They strengthen their lower bodies by running into one another. They are very kind and won't start fights.",
	},

	thirdParty: {
		cardmarket: 286256,
		tcgplayer: 107129
	}
}

export default card
