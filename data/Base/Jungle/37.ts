import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Gloom",
	},
	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		44,
	],
	hp: 60,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Oddish",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poisonpowder",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Foul Odor",
			},
			effect: {
				en: "Both the Defending Pokémon and Gloom are now Confused (after doing damage).",
			},
			damage: 20,

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
