import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Bagon δ",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		371,
	],
	hp: 40,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Granite Head",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Bagon by attacks is reduced by 10 (after applying Weakness and Resistance).",
			},
			damage: 10,

		},
	],






}

export default card
