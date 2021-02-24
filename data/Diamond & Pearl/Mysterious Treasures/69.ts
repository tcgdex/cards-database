import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Abra",
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
				en: "Play Search",
			},
			effect: {
				en: "Look at the top 5 cards of your deck, choose 1 of them, and put it into your hand. Put the 4 other cards back on top of your deck. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Ultra Evolution",
			},
			effect: {
				en: "Search your deck for Alakazam and put it onto Abra (this counts as evolving Abra). Shuffle your deck afterward.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],





}

export default card
