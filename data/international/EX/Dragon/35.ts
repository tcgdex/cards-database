import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Magneton",
		'fr-fr': "Magneton",
		'de-de': "Magneton"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [82],

	hp: 80,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Magnemite",
		'fr-fr': "Magnéti"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'de-de': "Ramme"
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Triple Smash",
				'fr-fr': "Triple éclate",
				'de-de': "Dreifachschmetterer"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 20 damage plus 20 more damage for each heads.",
				'fr-fr': "Lancez trois pièces. Cette attaque inflige 20 dégâts plus 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 20 Schadenspunkte plus 20 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87101,
				cardmarket: 275912
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87101,
				cardmarket: 275912
			},
		},
	],

}

export default card
