import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Grimer"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [88],

	hp: 50,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Nasty Goo"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Minimized"
			},
			effect: {
				'en-us': "All damage done by attacks to Grimer during your opponent's next turn is reduced by 20 (after applying Weakness and Resistance)."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Appears in filthy areas. Thrives by sucking up polluted sludge that is pumped out of factories."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274843,
				tcgplayer: 85906
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85906,
				cardmarket: 274843
			}
		}
	],

}

export default card
