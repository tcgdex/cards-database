import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Shaymin",
	},
	illustrator: "Shibuzoh.",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 70,
	types: [
		"Grass",
	],




	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Leech Seed",
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Flower Bearing",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent shuffles their Active Pokémon and all attached cards and puts them on the bottom of their deck.",
			},

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
