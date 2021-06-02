import { Card } from '../../../interfaces'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		en: "Corsola",
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		222,
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
				en: "Rally",
			},
			effect: {
				en: "Search your deck for up to 3 different types of Basic Pok��mon and put them onto your Bench. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Hook",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],





}

export default card
