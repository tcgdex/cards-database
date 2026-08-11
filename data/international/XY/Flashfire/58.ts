import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Scraggy",
		'fr-fr': "Baggiguane",
		'es-es': "Scraggy",
		'it-it': "Scraggy",
		'pt-br': "Scraggy",
		'de-de': "Zurrokex"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		559,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Tail Rap",
				'fr-fr': "Frap'Keu",
				'es-es': "Coleada",
				'it-it': "Mano-Coda",
				'pt-br': "Batida de Cauda",
				'de-de': "Schweifklopfen"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Esse ataque causa 20 de danos vezes o número de caras.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its skin has a rubbery elasticity, so it can reduce damage by defensively pulling it skin up to its neck.",
	},

	thirdParty: {
		cardmarket: 281541,
		tcgplayer: 91195
	}
}

export default card
