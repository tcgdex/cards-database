import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Kakuna",
	},
	illustrator: "Sachiko Adachi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		14,
	],
	hp: 60,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Weedle",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Fast Evolution",
			},
			effect: {
				en: "Search your deck for an Evolution card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rollout",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
