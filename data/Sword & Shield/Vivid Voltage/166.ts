import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Orbeetle V",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,

	hp: 180,
	types: [
		"Grass",
	],




	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Strafe",
			},
			effect: {
				en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Mysterious Wave",
			},
			effect: {
				en: "This attack does 30 more damage for each Energy attached to your opponent’s Active Pokémon.",
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
