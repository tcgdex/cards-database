import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Talonflame V",
	},
	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 190,
	types: [
		"Fire",
	],




	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fast Flight",
			},
			effect: {
				en: "If you go first, you can use this attack during your first turn. Discard your hand and draw 6 cards.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Bright Wing",
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
			},
			damage: 160,

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
