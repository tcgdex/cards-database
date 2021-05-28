import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Zebstrika",
		fr: "Zéblitz"
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
		fr: "Zébibron"
	},

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Low Kick",
				fr: "Balayage"
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
				fr: "Coup de Pied Ravageur"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
