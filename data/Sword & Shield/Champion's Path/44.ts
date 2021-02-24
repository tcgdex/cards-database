import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Inkay",
	},
	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 60,
	types: [
		"Darkness",
	],




	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Tackle",
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Attack from Behind",
			},
			effect: {
				en: "If your opponent’s Active Pokémon is Confused, this attack does 50 more damage.",
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
