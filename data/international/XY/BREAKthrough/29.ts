import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Staryu",
		'fr-fr': "Stari",
		'es-es': "Staryu",
		'it-it': "Staryu",
		'pt-br': "Staryu",
		'de-de': "Sterndu"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		120,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Continuous Spin",
				'fr-fr': "Rotation Continue",
				'es-es': "Giro Continuo",
				'it-it': "Eternogiro",
				'pt-br': "Giro Contínuo",
				'de-de': "Dauerdrehung"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 10 puntos de daño por cada cara.",
				'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 10 danni ogni volta che esce testa.",
				'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 10 de danos vezes o número de caras.",
				'de-de': "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10×",

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
		'en-us': "It appears in large numbers by seashores. At night, its central core flashes with a red light.",
	},

	thirdParty: {
		cardmarket: 286275,
		tcgplayer: 107148
	}
}

export default card
