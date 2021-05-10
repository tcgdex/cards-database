import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Hitmontop",
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Fightning",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cycle Draw",
			},
			effect: {
				en: "Discard a card from your hand. If you do, draw 3 cards.",
			},

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tornado Kick",
			},
			effect: {
				en: "If you played Bea from your hand during this turn, this attack does 80 more damage.",
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
