import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Snorunt",
	},
	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		361,
	],

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
				en: "Ice Breath",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Double Headbutt",
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
			},
			damage: "20x",

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
