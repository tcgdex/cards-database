import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Spheal",
		'fr-fr': "Obalie",
		'es-es': "Spheal",
		'it-it': "Spheal",
		'pt-br': "Spheal",
		'de-de': "Seemops"
	},

	illustrator: "TOKIYA",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		363,
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
				'en-us': "Ball Roll",
				'fr-fr': "Boulé-Roulade",
				'es-es': "Rodabola",
				'it-it': "Rotopalla",
				'pt-br': "Rolo Bola",
				'de-de': "Ballrolle"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño por cada cara.",
				'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni ogni volta che esce testa.",
				'pt-br': "Jogue uma moeda até sair coroa. Esse ataque causa 30 de danos vezes o número de caras.",
				'de-de': "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its body is covered in fluffy fur. The fur keeps it from feeling cold while it is rolling on ice.",
	},

	thirdParty: {
		cardmarket: 273576,
		tcgplayer: 95942
	}
}

export default card
