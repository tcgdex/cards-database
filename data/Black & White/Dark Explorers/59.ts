import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Gurdurr",
		fr: "Ouvrifier",
		es: "Gurdurr",
		it: "Gurdurr",
		pt: "Gurdurr",
		de: "Strepoli"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		533,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Timburr",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Low Kick",
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Steel Swing",
			},
			effect: {
				en: "Flip 2 coins. This attack does 60 damage times the number of heads.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2
}

export default card
