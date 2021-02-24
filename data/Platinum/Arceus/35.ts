import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Charmeleon",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		5,
	],

	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Charmander",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slam",
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
			},
			damage: "30x",

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Punch",
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
