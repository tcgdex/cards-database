import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Shedinja",
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 30,

	types: [
		"Psychic",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shell Survival",
			},
			effect: {
				en: "Put this Pokémon into play only with the effect of Ninjask’s Cast-Off Shell Ability. (When you are setting up to play, you cannot put it face down as your Active Pokémon or on your Bench.)",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Life Squeeze",
			},
			effect: {
				en: "Put damage counters on your opponent’s Active Pokémon until its remaining HP is 10.",
			},

		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
