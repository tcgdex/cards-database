import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Mareanie",
		'fr-fr': "Vorastérie",
		'es-es': "Mareanie",
		'it-it': "Mareanie",
		'pt-br': "Mareanie",
		'de-de': "Garstella"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		747,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Peck",
				'fr-fr': "Picpic",
				'es-es': "Picotazo",
				'it-it': "Beccata",
				'pt-br': "Bicada",
				'de-de': "Schnabel"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
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
				'en-us': "Flip 4 coins. This attack does 10 damage for each heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
				'es-es': "Lanza 4 monedas. Este ataque hace 10 puntos de daño por cada cara.",
				'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
				'pt-br': "Jogue 4 moedas. Este ataque causa 10 pontos de dano para cada cara.",
				'de-de': "Wirf 4 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It plunges the poison spike on its head into its prey. When the prey has weakened, Mareanie deals the finishing blow with its 10 tentacles.",
	},

	thirdParty: {
		cardmarket: 365706,
		tcgplayer: 178918
	}
}

export default card
