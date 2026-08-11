import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [276],

	name: {
		'en-us': "Taillow",
		'fr-fr': "Nirondelle",
		'es-es': "Taillow",
		'it-it': "Taillow",
		'pt-br': "Taillow",
		'de-de': "Schwalbini"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Colorless",
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Peck",
				'fr-fr': "Double Picpic",
				'es-es': "Doble Picotazo",
				'it-it': "Beccata Doppia",
				'pt-br': "Bicada Dupla",
				'de-de': "Doppelschnabel"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It dislikes cold seasons. They migrate to other lands in search of warmth, flying over 180 miles a day."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 512375,
				tcgplayer: 226589
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 512375,
				tcgplayer: 226589
			}
		},
	],
}

export default card
