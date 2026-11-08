import { Card } from 'models/database/card'
import Set from '../POP Series 4'

const card: Card = {
	name: {
		'en-us': "Grovyle",
		'fr-fr': "Massko"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [253],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Treecko",
		'fr-fr': "Arcko"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-attaque"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires."
			},
			damage: "10+",

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Blot",
				'fr-fr': "Pâté"
			},
			effect: {
				'en-us': "Remove 2 damage counters from Grovyle.",
				'fr-fr': "Retirez à Massko 2 marqueurs de dégât."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85940,
				cardmarket: 277472
			},
		},
	],

}

export default card
