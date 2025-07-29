import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Cubchoo",
		fr: "Polarhume",
		es: "Cubchoo",
		it: "Cubchoo",
		pt: "Cubchoo",
		de: "Petznief"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		613,
	],

	hp: 70,

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
				en: "Fury Swipes",
				fr: "Combo-Griffe",
				es: "Golpes Furia",
				it: "Sfuriate",
				pt: "Golpes de Fúria",
				de: "Kratzfurie"
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
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Frost Breath",
				fr: "Souffle Glacé",
				es: "Vaho Gélido",
				it: "Alitogelido",
				pt: "Respiração de Gelo",
				de: "Eisesodem"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281685
	}
}

export default card
