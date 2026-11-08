import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Monferno",
		'fr-fr': "Chimpenfeu",
		'de-de': "Panpyro"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		391,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Chimchar",
		'fr-fr': "Ouisticram",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Flame Dance",
				'fr-fr': "Danse enflammée",
				'de-de': "Flammentanz"
			},
			effect: {
				'en-us': "Search your discard pile for a Fire Energy card and attach it to Monferno.",
				'fr-fr': "Chercher dans votre pile de défausse une carte Énergie Fire et attachez-la à Chimpenfeu.",
				'de-de': "Durchsuche deinen Ablagestapel nach einer -Energiekarte und lege sie an Panpyro an."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fury Swipes",
				'fr-fr': "Combo-griffe",
				'de-de': "Kratzfurie"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	description: {
		'en-us': "To intimidate attackers, it stretches the fire on its tail to make itself appear bigger.",
		'fr-fr': "Pour intimider ses agresseurs, il gonfle les flammes de sa queue pour paraître plus grand."
	},

	thirdParty: {
		cardmarket: 277555,
		tcgplayer: 87570
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
