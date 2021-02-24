import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Grovyle",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		253,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Treecko",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Fury Cutter",
			},
			effect: {
				en: "Flip 4 coins. If all of them are heads, this attack does 10 damage plus 60 more damage. If not, this attack does 10 damage plus 10 more damage for each heads.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],




}

export default card
