import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Onix"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [95],

	hp: 90,

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
				'en-us': "Rock Throw"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Harden"
			},
			effect: {
				'en-us': "During your opponent's next turn, whenever 30 or less damage is done to Onix (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		'en-us': "As it grows, the stone portions of its body harden to become similar to a diamond, though colored black."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274849,
				tcgplayer: 87877
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87877,
				cardmarket: 274849
			}
		}
	],

}

export default card
