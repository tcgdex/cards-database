import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Whimsicott",
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Cottonee",
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Triple Draw",
			},
			effect: {
				en: "Draw 3 cards.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Flying Fury",
			},
			effect: {
				en: "Before doing damage, you may discard any number of Pokémon Tools from your Pokémon. This attack does 40 more damage for each card you discarded in this way.",
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	regulationMark: "D"
}

export default card
