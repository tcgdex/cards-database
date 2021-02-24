import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Quilava",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		156,
	],
	hp: 60,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Cyndaquil",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Incinerate",
			},
			effect: {
				en: "Show the top card of your opponent's deck to all players. If it's a Trainer card, discard it.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Rushing Magma",
			},
			effect: {
				en: "Discard the top 5 cards of your deck. (If there are fewer than 5 cards in your deck, discard all of them.) This attack does 20 damage for each Energy card you discarded in this way.",
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
