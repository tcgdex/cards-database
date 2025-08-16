import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Magmar",
		de: "Magmar"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		126,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dump and Draw",
				de: "Dump and Draw"
			},
			effect: {
				en: "Discard up to 2 Energy cards from your hand. Then, draw 2 cards for each Energy card you discarded.",
				de: "Discard up to 2 Energy cards from your hand. Then, draw 2 cards for each Energy card you discarded."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flame Tail",
				de: "Flame Tail"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 276336,
		tcgplayer: 87045
	}
}

export default card
