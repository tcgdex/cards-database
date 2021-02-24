import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Onix",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		95,
	],
	hp: 90,
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
				en: "Rock Throw",
			},

			damage: 10,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Harden",
			},
			effect: {
				en: "During opponent's next turn, whenever 30 or less damage is done to Onix (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)",
			},

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
