import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Trapinch",
	},

	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Fightning",
	],

	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Land’s Pulse",
			},
			effect: {
				en: "If a Stadium is in play, this attack does 10 more damage.",
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
