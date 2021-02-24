import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Rayquaza δ",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		384,
	],
	hp: 80,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Outrage",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing. If heads, this attack does 10 damage plus 10 more damage for each damage counter on Rayquaza.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
			},
			effect: {
				en: "Discard 1 Fire Energy attached to Rayquaza.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],





}

export default card
