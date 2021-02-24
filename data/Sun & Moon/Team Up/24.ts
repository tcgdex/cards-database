import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Wartortle",
		fr: "Carabaffe",
	},
	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		8,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Squirtle",
		fr: "Carapuce",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Waterfall",
				fr: "Cascade",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
