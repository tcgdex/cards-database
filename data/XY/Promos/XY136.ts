import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Noctowl BREAK",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		164,
	],
	hp: 130,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Noctowl",
	},
	stage: "BREAK",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Night Scan",
			},
			effect: {
				en: "Your opponent reveals his or her hand. This attack does 30 more damage for each Trainer card you find there.",
			},
			damage: 60,

		},
	],






}

export default card
