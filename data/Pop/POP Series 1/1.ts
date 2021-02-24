import { Card } from '../../../interfaces'
import Set from '../POP Series 1'

const card: Card = {
	name: {
		en: "Blaziken",
	},
	illustrator: "Katsura Tabata",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		257,
	],
	hp: 110,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Combusken",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Punch",
			},

			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Kick",
			},
			effect: {
				en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
			},
			damage: 50,

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
