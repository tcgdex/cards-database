import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Azumarill",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		184,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Marill",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Drizzle",
			},
			effect: {
				en: "If you have Water Energy cards in your hand, attach as many Water Energy cards as you like to any of your Active Pokémon.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Max Bubbles",
			},
			effect: {
				en: "Flip a coin for each Energy attached to all of your Active Pokémon. This attack does 30 damage times the number of heads.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
