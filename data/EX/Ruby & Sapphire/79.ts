import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Zigzagoon",
		fr: "Zigzaton",
		de: "Zigzachs"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		263,
	],

	hp: 40,

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
				en: "Fury Swipes",
				fr: "Combo-griffe",
				de: "Kratzfurie"
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez trois pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de face.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "10x",

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
		cardmarket: 275727,
		tcgplayer: 90744
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
