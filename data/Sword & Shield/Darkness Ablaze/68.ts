import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Wigglytuff",
	},

	illustrator: "Lee HyunJung",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Jigglypuff",
	},

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sleep Pulse",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Smash",
			},
			effect: {
				en: "Flip 2 coins. This attack does 90 damage for each heads.",
			},
			damage: "90×",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
