import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Hitmonchan ex",
	},
	illustrator: "Hiromichi Sugiyama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		107,
	],
	hp: 90,
	types: [
		"Fightning",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Steady Punch",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Sky Uppercut",
			},
			effect: {
				en: "The attack's damage is not affected by Resistance.",
			},
			damage: 50,

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
