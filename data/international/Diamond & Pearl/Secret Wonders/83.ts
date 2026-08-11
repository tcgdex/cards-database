import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Clefairy",
		'fr-fr': "Mélofée",
		'de-de': "Piepi"
	},

	illustrator: "Lee HyunJung",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		35,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	item: {
		name: {
			'fr-fr': "Pierre Lune",
			'de-de': 'Mondstein'
		},
		effect: {
			'fr-fr': "Mélofée peut évoluer lors du tour où il est joué.",
			'de-de': 'Piepi kann in dem Zug entwickelt werden, in dem du es gespielt hast.'

		}
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Double Slap",
				'fr-fr': "Torgnoles",
				'de-de': 'Duplexhieb'
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': 'Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl "Kopf" zu. '
			},
			damage: "10×",

		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277836,
		tcgplayer: 84357
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
