import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Zekrom",
	},
	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 130,
	types: [
		"Lightning",
	],




	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Wild Shock",
			},
			effect: {
				en: "This Pokémon also does 60 damage to itself. Your opponent’s Active Pokémon is now Paralyzed.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
