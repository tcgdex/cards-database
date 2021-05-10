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
		"Fightning",
	],

	evolveFrom: {
		en: "Coalossal V",
	},

	attacks: [
		{
			cost: [
				"Fightning",
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
				"Fightning",
				"Fightning",
				"Fightning",
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
	regulationMark: "D"
}

export default card
