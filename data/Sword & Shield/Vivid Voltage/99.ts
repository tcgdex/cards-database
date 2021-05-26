import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Coalossal VMAX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 330,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Coalossal V",
	},



	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Eruption Shot",
			},
			effect: {
				en: "Discard the top card of your deck. If that card is an Energy card, this attack does 90 more damage, and attach that card to this Pokémon.",
			},
			damage: "40+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "G-Max Boulder",
			},

			damage: 240,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
