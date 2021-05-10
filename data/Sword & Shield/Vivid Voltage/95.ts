import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Lycanroc",
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Fightning",
	],

	evolveFrom: {
		en: "Rockruff",
	},

	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Rock Throw",
			},

			damage: 40,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Sharp Mane",
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
