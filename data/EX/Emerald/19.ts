import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Rhydon",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		112,
	],
	hp: 90,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Rhyhorn",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Horn Attack",
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Tumble",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
