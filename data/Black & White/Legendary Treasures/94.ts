import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Gible",
	},
	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		443,
	],
	hp: 50,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Fightning",
			],
			name: {
				en: "Gnaw",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],





}

export default card
