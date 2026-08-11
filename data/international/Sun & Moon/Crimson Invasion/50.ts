import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Mankey",
		'fr-fr': "Férosinge",
		'es-es': "Mankey",
		'it-it': "Mankey",
		'pt-br': "Mankey",
		'de-de': "Menki"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		56,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Three-Step Strike",
				'fr-fr': "Attaque en Trois Étapes",
				'es-es': "Golpe a Tres Pasos",
				'it-it': "Colpo Trifasico",
				'pt-br': "Golpe de Três Passos",
				'de-de': "Dreistufenstoß"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 10 damage for each heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
				'it-it': "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
				'pt-br': "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara.",
				'de-de': "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
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
		'en-us': "It can spontaneously become enraged. Everyone near it clears out as it rampages and the resulting loneliness makes it angrier still.",
	},

	thirdParty: {
		cardmarket: 311900,
		tcgplayer: 149073
	}
}

export default card
