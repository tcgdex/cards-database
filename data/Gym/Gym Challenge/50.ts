import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Koga's Weezing",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		110,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Koffing",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Spontaneous Explosion",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 30 more damage and Koga's Weezing does 30 damage to itself; if tails, this attack does 10 damage.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Toxic Cloud",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. It now takes 20 Poison damage instead of 10 after each player's turn (even if it was already Poisoned).",
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
