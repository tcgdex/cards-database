import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Meowth",
		'fr-fr': "Miaouss",
		'es-es': "Meowth",
		'it-it': "Meowth",
		'pt-br': "Meowth",
		'de-de': "Mauzi"
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
				'en-us': "Feelin' Fine",
				'fr-fr': "Mode Cool",
				'es-es': "Buen Rollito",
				'it-it': "Tuttobene",
				'pt-br': "Sensação Boa",
				'de-de': "Wohl fühlen"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'es-es': "Roba 1 carta.",
				'it-it': "Pesca una carta.",
				'pt-br': "Compre um card.",
				'de-de': "Ziehe 1 Karte."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fury Swipes",
				'fr-fr': "Combo-Griffe",
				'es-es': "Golpes Furia",
				'it-it': "Sfuriate",
				'pt-br': "Golpes de Fúria",
				'de-de': "Kratzfurie"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 3 monedas. Este ataque hace 20 puntos de daño por cada cara.",
				'it-it': "Lancia tre volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
				'pt-br': "Jogue 3 moedas. Este ataque causa 20 de danos vezes o número de caras.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
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

	description: {
		'en-us': "Adores round objects. It wanders the streets on a nightly basis to look for dropped loose change.",
	},

	thirdParty: {
		cardmarket: 282735,
		tcgplayer: 98103
	}
}

export default card
