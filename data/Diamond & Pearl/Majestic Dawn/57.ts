import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Chimchar",
		fr: "Ouisticram",
		de: "Panflam"
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
			fr: "Baie Ceriz",
			de: 'Amrenabeere'
		},
		effect: {
			fr: "Si Ouisticram est Paralysé, retirez à Ouisticram l'État Spécial Paralysé à la fin du tour de chaque joueur.",
			de: 'Wenn Panflam gelähmt ist, entferne am Ende jedes Zuges den Speziellen Zustand \'gelähmt\' von Panflam.'
		}
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fury Swipes",
				fr: "Combo-griffe",
				de: 'Kratzfurie'
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl 'Kopf' zu. "
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
	}
}

export default card
