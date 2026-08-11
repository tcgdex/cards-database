import { Card } from 'models/database/card'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		'en-us': "Lt. Surge's Jolteon"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [135],

	hp: 70,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Eevee"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "High Voltage"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent can't play Trainer cards during his or her next turn."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Thunder Flare"
			},
			effect: {
				'en-us': "Does 30 damage plus 10 damage times the number of damage counters on Lt. Surge's Jolteon, then flip a coin. If tails, Lt. Surge's Jolteon does 30 damage to itself."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86855,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 86855,
				cardmarket: 274296
			}
		},
	],
}

export default card
