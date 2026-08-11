import { Card } from 'models/database/card'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		'en-us': "Brock's Sandshrew"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [27],

	hp: 40,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Defense Curl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all damage done to Brock's Sandshrew during your opponent's next turn. (Any other effects of attacks still happen.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Rolling Attack"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83981,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 83981,
				cardmarket: 274207
			}
		}
	],
}

export default card

