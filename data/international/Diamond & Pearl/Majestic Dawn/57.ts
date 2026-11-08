import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Chimchar",
		'fr-fr': "Ouisticram",
		'de-de': "Panflam"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		390,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	item: {
		name: {
			'fr-fr': "Baie Ceriz",
			'de-de': 'Amrenabeere'
		},
		effect: {
			'fr-fr': "Si Ouisticram est Paralysé, retirez à Ouisticram l'État Spécial Paralysé à la fin du tour de chaque joueur.",
			'de-de': 'Wenn Panflam gelähmt ist, entferne am Ende jedes Zuges den Speziellen Zustand \'gelähmt\' von Panflam.'
		}
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Fury Swipes",
				'fr-fr': "Combo-griffe",
				'de-de': 'Kratzfurie'
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl 'Kopf' zu. "
			},
			damage: "10x",

		}
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278105,
		tcgplayer: 84285
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["countdown-calendar"]
		}
	]
}

export default card
