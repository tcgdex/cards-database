import { Card } from '../../../interfaces'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		en: "Kakuna",
	},
	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		14,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Weedle",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stiffen",
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Kakuna during your opponent's next turn. (Any other effects of attacks still happen.)",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Poisonpowder",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
