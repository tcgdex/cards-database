import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Beedrill EX",
	},

	illustrator: "hatachu",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		15,
	],

	hp: 160,

	types: [
		"Grass",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Scrapper",
			},
			effect: {
				en: "Discard up to 2 Pokémon Tool cards attached to your opponent's Pokémon.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Pin Missile",
			},
			effect: {
				en: "Flip 4 coins. This attack does 40 damage times the number of heads.",
			},
			damage: "40×",

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
