import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Machop",
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
				en: "Smash Punch",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Submission",
			},
			effect: {
				en: "Machop does 10 damage to itself.",
			},
			damage: 30,

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
