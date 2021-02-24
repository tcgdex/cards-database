import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Shelgon",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		372,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Bagon",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scrunch",
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Shelgon during your opponent's next turn. (Any other effects of attacks still happen.)",
			},

		},
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				en: "Rolling Attack",
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
		{
			type: "Fire",
			value: "-30"
		},
	],




}

export default card
