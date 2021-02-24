import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Gothita",
	},
	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 60,
	types: [
		"Psychic",
	],




	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Fortunate Eye",
			},
			effect: {
				en: "Look at the top 5 cards of your opponent’s deck and put them back in any order.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Gentle Slap",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],
	retreat: 1,



}

export default card
