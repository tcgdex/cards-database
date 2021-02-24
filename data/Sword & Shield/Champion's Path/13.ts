import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Wailord V",
	},
	illustrator: "PLANETA Mochizuki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 280,
	types: [
		"Water",
	],




	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Draw Up",
			},
			effect: {
				en: "Attach up to 3 Water Energy cards from your discard pile to this Pokémon.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Ocean Waves",
			},
			effect: {
				en: "Flip 3 coins. This attack does 120 damage for each heads.",
			},
			damage: "120×",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
