import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Sabrina's Abra",
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		63,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psyscan",
			},
			effect: {
				en: "Look at your opponent's hand.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Quick Attack",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274361
	}
}

export default card
