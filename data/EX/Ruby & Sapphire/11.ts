import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Sceptile",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		254,
	],
	hp: 120,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Grovyle",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Lizard Poison",
			},
			effect: {
				en: "If 1 Energy is attached to Sceptile, the Defending Pokémon is now Asleep. If 2 Energy is attached to Sceptile, the Defending Pokémon is now Poisoned. If 3 Energy is attached to Sceptile, the Defending Pokémon is now Asleep and Poisoned. If 4 or more Energy is attached to Sceptile, the Defending Pokémon is now Asleep, Burned, and Poisoned.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Solarbeam",
			},

			damage: 70,

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
			type: "Water",
			value: "-30"
		},
	],




}

export default card
