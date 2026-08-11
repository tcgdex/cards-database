import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Gligar",
		'fr-fr': "Scorplane",
		'es-es': "Gligar",
		'it-it': "Gligar",
		'pt-br': "Gligar",
		'de-de': "Skorgla"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		207,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rock Cannon",
				'fr-fr': "Canon à Pierres",
				'es-es': "Cañón Roca",
				'it-it': "Rocciocannone",
				'pt-br': "Canhão de Rochas",
				'de-de': "Felskanone"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 20 puntos de daño por cada cara.",
				'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 20 danni ogni volta che esce testa.",
				'pt-br': "Jogue uma moeda até sair coroa. Esse ataque causa 20 de danos vezes o número de caras.",
				'de-de': "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It usually clings to cliffs. When it spots its prey, it spreads its wings and glides down to attack.",
	},

	thirdParty: {
		cardmarket: 281852,
		tcgplayer: 94504
	}
}

export default card
