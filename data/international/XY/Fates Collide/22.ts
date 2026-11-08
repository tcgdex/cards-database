import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Binacle",
		'fr-fr': "Opermine",
		'es-es': "Binacle",
		'it-it': "Binacle",
		'pt-br': "Binacle",
		'de-de': "Bithora"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		688,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Swing Around",
				'fr-fr': "Balançoire",
				'es-es': "Dar Vueltas",
				'it-it': "Giravolta",
				'pt-br': "Balanço",
				'de-de': "Gegenschwung"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 20 puntos de daño más por cada cara.",
				'it-it': "Lancia due volte una moneta. Ogni volta che esce testa, questo attacco infligge 20 danni in più.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 20 de danos adicionais para cada cara.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "They stretch and then contract, yanking their rocks along with them in bold hops. They eat seaweed that washes up on the shoreline.",
	},

	thirdParty: {
		cardmarket: 289848,
		tcgplayer: 117784
	}
}

export default card
