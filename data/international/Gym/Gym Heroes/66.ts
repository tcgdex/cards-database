import { Card } from 'models/database/card'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		'en-us': "Brock's Geodude"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [74],

	hp: 40,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Call for Friend"
			},
			effect: {
				'en-us': "Flip a coin. If heads, you may search your deck for a Basic Pokémon card with Brock in its name and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Hook Shot"
			},
			effect: {
				'en-us': "Don't apply Resistance for this attack. (Any other effects that would happen after applying Resistance still happen.)"
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
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83964,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 83964,
				cardmarket: 274151
			}
		}
	],
}

export default card

