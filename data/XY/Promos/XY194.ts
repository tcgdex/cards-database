import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Darkrai",
	},
	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		491,
	],
	hp: 110,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dark Cutter",
			},

			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Abyssal Sleep",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep. Your opponent flips 2 coins instead of 1 between turns. If either of them is tails, that Pokémon is still Asleep.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],




}

export default card
