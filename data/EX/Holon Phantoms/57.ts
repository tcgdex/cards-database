import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Anorith δ",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		347,
	],
	hp: 70,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Claw Fossil",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Metal Claw",
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rising Lunge",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
