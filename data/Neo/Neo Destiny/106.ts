import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Shining Celebi",
	},
	illustrator: "Hironobu Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		251,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Healing Water",
			},
			effect: {
				en: "Remove a number of damage counters from 1 of your Benched Pokémon equal to the number of Energy cards attached to Shining Celebi. If the Pokémon has fewer damage counters than that, remove all of them.",
			},

		},
		{
			cost: [
				"Grass",
				"Psychic",
			],
			name: {
				en: "Miracle Leaf",
			},
			effect: {
				en: "Flip a number of coins equal to the number of Energy attached to the Defending Pokémon. If you get 1 or more heads, the Defending Pokémon is now Asleep, Confused, or Poisoned (your choice).",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
