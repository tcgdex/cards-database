import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Venusaur V",
	},
	illustrator: "PLANETA Mochizuki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 220,
	types: [
		"Grass",
	],




	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Pollen Bomb",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep and Poisoned.",
			},
			damage: 80,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Solar Typhoon",
			},
			effect: {
				en: "During your next turn, this Pokémon can’t use Solar Typhoon.",
			},
			damage: 220,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
