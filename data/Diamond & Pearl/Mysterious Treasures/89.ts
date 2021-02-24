import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Magikarp",
	},
	illustrator: "Yusuke Ohmura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		129,
	],
	hp: 30,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flail",
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Magikarp.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Dragon Rage",
			},
			effect: {
				en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],





}

export default card
