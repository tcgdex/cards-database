import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Machoke",
	},
	illustrator: "AKIRA EGAWA",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 110,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Machop",
	},



	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Low Kick",
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Pummel",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 70 more damage.",
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
