import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Goldeen",
		fr: "Poissirène",
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		118,
	],
	hp: 70,
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
				en: "Collect",
				fr: "Collecte",
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Waterfall",
				fr: "Cascade",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
