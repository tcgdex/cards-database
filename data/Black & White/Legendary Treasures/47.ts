import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Plusle",
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		311,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tag Draw",
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw 4 cards. If Minun is on your Bench, draw 4 more cards.",
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Positive Ion",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 more damage.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281198
	}
}

export default card
