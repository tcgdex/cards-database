import { Card } from 'models/database/card'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		'en-us': "Blaine's Vulpix"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [37],

	hp: 50,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bite"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Call Will-o'-the-wisp"
			},
			effect: {
				'en-us': "Flip 3 coins. For each heads, if you have a Fire Energy card in your discard pile, put it into your hand."
			},

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
				tcgplayer: 83886,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 83886,
				cardmarket: 274334
			}
		},
	],
}

export default card
