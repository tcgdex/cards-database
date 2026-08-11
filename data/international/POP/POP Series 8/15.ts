import { Card } from 'models/database/card'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		'en-us': "Piplup",
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		393,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Peck",
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Water Splash",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	description: {
		'en-us': "Because it is very proud, it hates accepting food from people. Its thick down guards it from cold."
	},

	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278416,
				tcgplayer: 88148
			}
		},
	],
}

export default card
