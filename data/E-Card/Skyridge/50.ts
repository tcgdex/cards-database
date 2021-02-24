import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Diglett",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		50,
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
				en: "Burrow",
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done by attacks to Diglett during your opponent's next turn. (Any other effects of attack still happen.)",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],




}

export default card
