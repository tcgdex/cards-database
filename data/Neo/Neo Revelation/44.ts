import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Geodude",
	},
	illustrator: "Masako Yamashita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		74,
	],
	hp: 40,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Knuckle Punch",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
