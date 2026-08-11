import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Taillow",
		'fr-fr': "Nirondelle",
		'es-es': "Taillow",
		'it-it': "Taillow",
		'pt-br': "Taillow",
		'de-de': "Schwalbini"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		276,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
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
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 10 de danos vezes o número de caras.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10×",

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
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It dislikes cold seasons. They migrate to other lands in search of warmth, flying over 180 miles a day.",
	},

	thirdParty: {
		cardmarket: 282738,
		tcgplayer: 98106
	}
}

export default card
