import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Sabrina's Venomoth",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare Holo",
	category: "Pokemon",

	set: Set,
	dexId: [
		49,
	],
	hp: 60,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Venonat",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Healing Pollen",
			},
			effect: {
				en: "Flip 3 coins. For each heads, remove 1 damage counter from each of your Pokémon. If a Pokémon has fewer damage counters than the number of heads, remove all of them.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sonic Distortion",
			},
			effect: {
				en: "Flip 2 coins. If 1 or both of them are heads, the Defending Pokémon is now Confused.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
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
