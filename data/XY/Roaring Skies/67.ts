import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Meowth",
		fr: "Miaouss",
		es: "Meowth",
		it: "Meowth",
		pt: "Meowth",
		de: "Mauzi"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		52,
	],

	hp: 60,

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
				en: "Feelin' Fine",
				fr: "Mode Cool",
				es: "Buen Rollito",
				it: "Tuttobene",
				pt: "Sensação Boa",
				de: "Wohl fühlen"
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte.",
				es: "Roba 1 carta.",
				it: "Pesca una carta.",
				pt: "Compre um card.",
				de: "Ziehe 1 Karte."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
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
				en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 3 monedas. Este ataque hace 20 puntos de daño por cada cara.",
				it: "Lancia tre volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
				pt: "Jogue 3 moedas. Este ataque causa 20 de danos vezes o número de caras.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 282735
	}
}

export default card
