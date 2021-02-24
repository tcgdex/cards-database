import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Shining Magikarp",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		129,
	],
	hp: 30,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Gold Scale",
			},
			effect: {
				en: "Your opponent may draw 2 cards. Either way, you may draw 2 cards.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Dragon Bond",
			},
			effect: {
				en: "Search your deck for a card named Gyarados, Dark Gyarados, or Shining Gyarados. Show it to your opponent and put it into your hand. Shuffle your deck afterward.",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
