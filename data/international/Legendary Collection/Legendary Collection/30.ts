import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Moltres"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [146],

	hp: 70,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Wildfire"
			},
			effect: {
				'en-us': "You may discard any number of Fire Energy cards attached to Moltres when you use this attack. If you do, discard that many cards from the top of your opponent's deck."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Dive Bomb"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing."
			},

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		'en-us': "Known as the legendary bird of fire. Every flap of its wings creates a dazzling flash of flames."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274795,
				tcgplayer: 87560
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87560,
				cardmarket: 274795
			}
		}
	],

}

export default card
