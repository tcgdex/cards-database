import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Blaine's Magmar",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		126,
	],
	hp: 60,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Magby",
	},
	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Firebreathing",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage; if tails, this attack does 10 damage.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Lava Burst",
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
