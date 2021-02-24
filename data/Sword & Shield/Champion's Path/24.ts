import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Machop",
	},
	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 70,
	types: [
		"Fightning",
	],




	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Low Kick",
			},

			damage: 10,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Steady Punch",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 more damage.",
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
