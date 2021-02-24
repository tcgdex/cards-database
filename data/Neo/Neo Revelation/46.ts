import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Murkrow",
	},
	illustrator: "Hironobu Yoshida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		198,
	],
	hp: 40,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
			},
			effect: {
				en: "Search your deck for a card named Murkrow and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flock Attack",
			},
			effect: {
				en: "Flip a number of coins equal to the number of Murkrows on your Bench. This attack does 10 damage plus 10 more damage for each heads.",
			},
			damage: 10,

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
