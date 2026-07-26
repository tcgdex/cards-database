import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Giovanni's Machop"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [66],

	hp: 50,

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
				en: "Chop"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Fury Punch"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage times the number of damage counters on Giovanni's Machop."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85714,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 85714,
				cardmarket: 274340
			}
		},
	],
}

export default card
