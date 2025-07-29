import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Totodile",
		fr: "Kaiminus",
		es: "Totodile",
		it: "Totodile",
		pt: "Totodile",
		de: "Karnimani"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		158,
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
			],
			name: {
				en: "Fury Strikes",
				fr: "Attaques Furieuses",
				es: "Impactos Furiosos",
				it: "Attacchi Furiosi",
				pt: "Pancadas de Fúria",
				de: "Zornschläge"
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
				it: "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
				pt: "Jogue 3 moedas. Esse ataque causa 10 de danos vezes o número de caras.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
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

	thirdParty: {
		cardmarket: 281818
	}
}

export default card
