import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Giovanni's Machop",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		66,
	],
	hp: 50,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Chop",
			},

			damage: 10,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Fury Punch",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage times the number of damage counters on Giovanni's Machop.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
