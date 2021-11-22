import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Shaymin",
		fr: "Shaymin"
	},

	illustrator: "You Iribi",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		492,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aromatherapy",
			},
			effect: {
				en: "Heal 30 damage from each of your Pokémon.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magical Leaf",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage and heal 20 damage from this Pokémon.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1
}

export default card
