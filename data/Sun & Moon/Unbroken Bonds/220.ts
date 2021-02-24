import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Muk & Alolan Muk-GX",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		89,
	],
	hp: 270,
	types: [
		"Psychic",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Severe Poison",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned. Put 8 damage counters instead of 1 on that Pokémon between turns.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Absorption",
			},
			effect: {
				en: "If your opponent's Active Pokémon is Poisoned, heal 100 damage from this Pokémon.",
			},
			damage: 120,

		},
		{

			name: {
				en: "Nasty Goo Mix-GX",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Paralyzed and Poisoned. If this Pokémon has at least 4 extra Energy attached to it (in addition to this attack's cost), put 15 damage counters instead of 1 on that Pokémon between turns. (You can't use more than 1 GX attack in a game.)",
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
