import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Dragonair",
		fr: "Draco",
	},
	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		148,
	],
	hp: 100,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Dratini",
		fr: "Minidraco",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Tail",
				fr: "Draco-Queue",
			},
			effect: {
				en: "Flip 2 coins. This attack does 60 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 60,

		},
		{
			cost: [
				"Water",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Waterfall",
				fr: "Cascade",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
