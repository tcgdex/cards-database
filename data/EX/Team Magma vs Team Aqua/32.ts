import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Baltoy",
	},
	illustrator: "Atsuko Ujiie",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		343,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Psymist",
			},
			effect: {
				en: "Flip 2 coins. For each heads, choose 1 of your opponent's Pokémon and put 1 damage counter on that Pokémon.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Pain Amplifier",
			},
			effect: {
				en: "Put 1 damage counter on each of your opponent's Pokémon that already has damage counters on it.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
