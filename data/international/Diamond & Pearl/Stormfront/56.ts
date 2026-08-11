import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Cherubi",
		'fr-fr': "Ceribou",
		'de-de': "Kikugi"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		420,
	],

	hp: 50,

	types: [
		"Grass",
	],

	evolveFrom: {
		'fr-fr': "Ceribou",
	},

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Nap",
				'fr-fr': "Tit'sieste",
				'de-de': "Nickerchen"
			},
			effect: {
				'en-us': "Remove 2 damage counters from Cherubi.",
				'fr-fr': "Retirez à Ceribou 2 marqueurs de dégâts.",
				'de-de': "Entferne 2 Schadensmarken von Kikugi."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Bullet Seed",
				'fr-fr': "Balle graine",
				'de-de': "Kugelsaat"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 4 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The small ball holds the nutrients needed for evolution. Apparently, it is very sweet and tasty.",
		'fr-fr': "La petite boule renferme les délicieux nutriments sucrés dont il a besoin pour évoluer."
	},

	thirdParty: {
		cardmarket: 278354,
		tcgplayer: 84261
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
