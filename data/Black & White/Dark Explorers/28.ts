import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Prinplup",
		fr: "Prinplouf",
		es: "Prinplup",
		it: "Prinplup",
		pt: "Prinplup",
		de: "Pliprin"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		394,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Piplup",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Razor Wing",
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Attack",
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2
}

export default card
