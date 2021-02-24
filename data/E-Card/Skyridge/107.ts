import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Swinub",
	},
	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		220,
	],
	hp: 50,
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
				en: "Ram",
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Freezing Breath",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Asleep.",
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],





}

export default card
