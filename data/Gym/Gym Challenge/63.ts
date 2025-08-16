import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Blaine's Mankey",
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		56,
	],

	hp: 40,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pranks",
			},
			effect: {
				en: "Flip a coin. If heads, choose a card from your opponent's discard pile and put it on top of his or her deck.",
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Fury Swipes",
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
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
		cardmarket: 274331,
		tcgplayer: 83874
	}
}

export default card
