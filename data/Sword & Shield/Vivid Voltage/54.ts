import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Zebstrika",
	},

	illustrator: "0313",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Blitzle",
	},

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Low Kick",
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Zap Kick",
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
