import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Binacle",
		'fr-fr': "Opermine",
		'es-es': "Binacle",
		'it-it': "Binacle",
		'pt-br': "Binacle",
		'de-de': "Bithora"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		688,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Double Scratch",
				'fr-fr': "Double Écorchure",
				'es-es': "Arañazo Doble",
				'it-it': "Doppio Graffio",
				'pt-br': "Arranhão Duplo",
				'de-de': "Doppelkratzer"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Esse ataque causa 30 de danos vezes o número de caras.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Two Binacle live together on one rock. When they fight, one of them will move to a different rock.",
	},

	thirdParty: {
		cardmarket: 281531,
		tcgplayer: 91181
	}
}

export default card
