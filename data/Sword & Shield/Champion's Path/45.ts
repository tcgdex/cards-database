import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Malamar",
	},
	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 120,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Inkay",
	},



	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Eerie Wave",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
			},
			damage: 50,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Random Peck",
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 more damage for each heads.",
			},
			damage: "80+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
