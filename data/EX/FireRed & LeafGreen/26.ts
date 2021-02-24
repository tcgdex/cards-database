import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Kingler",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		99,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Krabby",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Salt Water",
			},
			effect: {
				en: "Search your deck for up to 2 Water Energy cards and attach them to Kingler. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Hyper Pump",
			},
			effect: {
				en: "Does 30 damage plus 20 more damage for each basic Energy attached to Kingler but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
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





}

export default card
