import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Linoone",
		fr: "Lineon",
		de: "Geradaks"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		264,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Zigzagoon",
		fr: "Zigzaton"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sniff Out",
				fr: "Flairer",
				de: "Sniff Out"
			},
			effect: {
				en: "Put any 1 card from your discard pile into your hand.",
				fr: "Placez n'importe quelle carte de votre pile de défausse dans votre main.",
				de: "Put any 1 card from your discard pile into your hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Swipes",
				fr: "Combo-griffe",
				de: "Fury Swipes"
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez trois pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de face.",
				de: "Flip 3 coins. This attack does 20 damage times the number of heads."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 0,

	thirdParty: {
		cardmarket: 275821,
		tcgplayer: 86804
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
