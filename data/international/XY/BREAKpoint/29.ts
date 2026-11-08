import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Corsola",
		'fr-fr': "Corayon",
		'es-es': "Corsola",
		'it-it': "Corsola",
		'pt-br': "Corsola",
		'de-de': "Corasonn"
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		222,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spike Cannon",
				'fr-fr': "Picanon",
				'es-es': "Clavo Cañón",
				'it-it': "Sparalance",
				'pt-br': "Canhão de Espinhos",
				'de-de': "Dornkanone"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 30 de danos vezes o número de caras.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Power Gem",
				'fr-fr': "Rayon Gemme",
				'es-es': "Joya de Luz",
				'it-it': "Gemmoforza",
				'pt-br': "Gema Poderosa",
				'de-de': "Juwelenkraft"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They prefer unpolluted southern seas. Their coral branches lose their color and deteriorate in dirty water.",
	},

	thirdParty: {
		cardmarket: 288204,
		tcgplayer: 111535
	}
}

export default card
