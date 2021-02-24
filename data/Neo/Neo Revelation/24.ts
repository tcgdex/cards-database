import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Sneasel",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		215,
	],
	hp: 60,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Swipe",
			},
			effect: {
				en: "Flip a coin. If heads, discard all Trainer cards attached to your opponent's Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Attack",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
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
