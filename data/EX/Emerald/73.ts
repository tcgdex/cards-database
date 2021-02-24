import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Whismur",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		293,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rollout",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
