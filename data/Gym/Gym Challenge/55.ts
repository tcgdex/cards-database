import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Sabrina's Haunter",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		93,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Gastly",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Nightmare",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Shadow Attack",
			},
			effect: {
				en: "Flip a coin. If heads, and if your opponent has any Benched Pokémon, choose 1 of them and this attack does 30 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
