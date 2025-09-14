import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Nidoran♂",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		32,
	],
	hp: 40,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Horn Hazard",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	]
}

export default card
