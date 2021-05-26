import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Swellow",
	},
	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Taillow",
	},



	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Quick Attack",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 more damage.",
			},
			damage: "20+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Energy Assist",
			},
			effect: {
				en: "Attach up to 2 basic Energy cards from your discard pile to 1 of your Benched Pokémon.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
