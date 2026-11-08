import { Card } from 'models/database/card'
import Set from '../POP Series 5'

const card: Card = {
	name: {
		'en-us': "Charmeleon δ",
		'fr-fr': "Charmeleon δ"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [5],

	hp: 70,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche"
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
				'en-us': "Thunder Jolt",
				'fr-fr': "Secousse tonnerre"
			},
			effect: {
				'en-us': "Flip a coin. If tails, Charmeleon does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est pile, Reptincel s'inflige 10 dégâts."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84237,
				cardmarket: 277487
			},
		},
	],

}

export default card
