import { Card } from 'models/database/card'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		'en-us': "Combusken",
		'fr-fr': "Galifeu"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [256],

	hp: 70,

	types: [
		"Fire"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flamethrower",
				'fr-fr': "Lance-flamme"
			},
			effect: {
				'en-us': "Discard a Fire Energy attached to Combusken.",
				'fr-fr': "Défaussez une Énergie  attachée à Galifeu."
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
				tcgplayer: 84405,
				cardmarket: 277455
			},
		},
	],

}

export default card
