import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Clefairy",
		fr: "Mélofée",
		de: "Piepi"
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
			fr: "Pierre Lune",
			de: 'Mondstein'
		},
		effect: {
			fr: "Mélofée peut évoluer lors du tour où il est joué.",
			de: 'Piepi kann in dem Zug entwickelt werden, in dem du es gespielt hast.'

		}
	},


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Slap",
				fr: "Torgnoles",
				de: 'Duplexhieb'
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: 'Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl "Kopf" zu. '
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



}

export default card
