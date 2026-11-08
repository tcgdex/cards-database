import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Linoone",
		'fr-fr': "Lineon",
		'de-de': "Geradaks"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [264],

	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Zigzagoon",
		'fr-fr': "Zigzaton"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sniff Out",
				'fr-fr': "Flairer",
				'de-de': "Sniff Out"
			},
			effect: {
				'en-us': "Put any 1 card from your discard pile into your hand.",
				'fr-fr': "Placez n'importe quelle carte de votre pile de défausse dans votre main.",
				'de-de': "Put any 1 card from your discard pile into your hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fury Swipes",
				'fr-fr': "Combo-griffe",
				'de-de': "Fury Swipes"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez trois pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de face.",
				'de-de': "Flip 3 coins. This attack does 20 damage times the number of heads."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 0,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275821,
				tcgplayer: 86804
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275821,
				tcgplayer: 86804
			}
		},
	],

}

export default card
