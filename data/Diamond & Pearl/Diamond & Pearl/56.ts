import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Monferno",
		fr: "Chimpenfeu",
		de: "Panpyro"
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
		en: "Chimchar",
		fr: "Ouisticram",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Flame Dance",
				fr: "Danse enflammée",
				de: "Flammentanz"
			},
			effect: {
				en: "Search your discard pile for a Fire Energy card and attach it to Monferno.",
				fr: "Chercher dans votre pile de défausse une carte Énergie Fire et attachez-la à Chimpenfeu.",
				de: "Durchsuche deinen Ablagestapel nach einer -Energiekarte und lege sie an Panpyro an."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Swipes",
				fr: "Combo-griffe",
				de: "Kratzfurie"
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl 'Kopf' zu."
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
		fr: "Pour intimider ses agresseurs, il gonfle les flammes de sa queue pour paraître plus grand."
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
