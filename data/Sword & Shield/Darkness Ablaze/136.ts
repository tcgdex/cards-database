import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Furret",
	},

	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Sentret",
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Feelin’ Fine",
			},
			effect: {
				en: "Draw 3 cards.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tail Smash",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
