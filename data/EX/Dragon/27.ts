import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Flaaffy",
	},
	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		180,
	],
	hp: 80,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Mareep",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Energy Recall",
			},
			effect: {
				en: "Attach up to 2 basic Energy cards from your discard pile to Flaaffy.",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Lightning Ball",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],




}

export default card
