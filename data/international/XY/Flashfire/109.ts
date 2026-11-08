import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "M Kangaskhan EX",
		'fr-fr': "M-Kangourex EX",
		'es-es': "M-Kangaskhan EX",
		'it-it': "M Kangaskhan EX",
		'pt-br': "M-Kangaskhan EX",
		'de-de': "M-Kangama EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		115,
	],

	hp: 230,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Kangaskhan-EX",
		'fr-fr': "Kangourex-EX",
		'es-es': "Kangaskhan-EX",
		'it-it': "Kangaskhan-EX",
		'pt-br': "Kangaskhan-EX",
		'de-de': "Kangama-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wham Bam Punch",
				'fr-fr': "Poing Boum",
				'es-es': "Pum Catapum",
				'it-it': "Scazzottata",
				'pt-br': "Soco Violento",
				'de-de': "Ratzfatz Punch"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
				'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño más por cada cara.",
				'it-it': "Lancia una moneta finché non esce croce. Ogni volta che esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 30 de danos adicionais para cada cara.",
				'de-de': "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 30 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "100+",

		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 91247
	}
}

export default card
