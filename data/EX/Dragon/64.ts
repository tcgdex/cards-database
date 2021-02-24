import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Mareep",
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		179,
	],
	hp: 50,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Jolt",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],




}

export default card
