import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Feraligatr",
		'fr-fr': "Aligatueur",
		'de-de': "Impergator"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [160],

	hp: 100,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Croconaw",
		'fr-fr': "Crocrodil"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Slash"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Double Claw",
				'fr-fr': "Combo-griffe",
				'de-de': "Double Claw"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage plus 20 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque face.",
				'de-de': "Flip 2 coins. This attack does 30 damage plus 20 more damage for each heads."
			},
			damage: "30+",

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85415,
				cardmarket: 274887
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85415,
				cardmarket: 274887
			},
		},
	],
}

export default card
