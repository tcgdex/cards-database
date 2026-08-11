import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Porygon2",
		'fr-fr': "Porygon2",
		'es-es': "Porygon2",
		'it-it': "Porygon2",
		'pt-br': "Porygon2",
		'de-de': "Porygon2"
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		233,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Porygon",
		'fr-fr': "Porygon",
		'es-es': "Porygon",
		'it-it': "Porygon",
		'pt-br': "Porygon",
		'de-de': "Porygon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sharpen",
				'fr-fr': "Affûtage",
				'es-es': "Afilar",
				'it-it': "Affilatore",
				'pt-br': "Afiar",
				'de-de': "Schärfer"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tri Attack",
				'fr-fr': "Triplattaque",
				'es-es': "Triataque",
				'it-it': "Tripletta",
				'pt-br': "Tri Ataque",
				'de-de': "Triplette"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 3 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				'it-it': "Lancia tre volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				'pt-br': "Jogue 3 moedas. Este ataque causa 30 de danos vezes o número de caras.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "With planetary development software installed, it became capable of working in space.",
	},

	thirdParty: {
		cardmarket: 284246,
		tcgplayer: 101487
	}
}

export default card
