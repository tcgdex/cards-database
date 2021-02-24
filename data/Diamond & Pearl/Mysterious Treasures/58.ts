import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Parasect",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		47,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Paras",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Wild Spores",
			},
			effect: {
				en: "If Parasect evolved from Paras during this turn, this attack does 40 damage and the Defending Pokémon is now Asleep and Poisoned.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Extend Fungus",
			},
			effect: {
				en: "Remove 2 damage counters from Parasect.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],





}

export default card
