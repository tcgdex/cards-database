import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Chespin",
		'fr-fr': "Marisson",
		'es-es': "Chespin",
		'it-it': "Chespin",
		'pt-br': "Chespin",
		'de-de': "Igamaro"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		650,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
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
				'en-us': "Flip 4 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 4 monedas. Este ataque hace 10 puntos de daño por cada cara.",
				'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
				'pt-br': "Jogue 4 moedas. Esse ataque causa 10 de danos vezes o número de caras.",
				'de-de': "Wirf 4 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The quills on its head are usually soft. When it flexes them, the points become so hard and sharp that they can pierce rock.",
	},

	thirdParty: {
		cardmarket: 281349,
		tcgplayer: 84269
	}
}

export default card
