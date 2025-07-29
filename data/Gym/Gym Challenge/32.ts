import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Blaine's Dodrio",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		85,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Doduo",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Peck",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 274300
	}
}

export default card
