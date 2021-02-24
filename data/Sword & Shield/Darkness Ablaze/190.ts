import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Butterfree VMAX",
	},
	illustrator: "aky CG Works",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 300,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Butterfree V",
	},



	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "G-Max Toxbreeze",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused and Poisoned.",
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
