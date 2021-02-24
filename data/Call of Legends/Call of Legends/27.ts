import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Meganium",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		154,
	],
	hp: 130,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Bayleef",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sleep Powder",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giant Bloom",
			},
			effect: {
				en: "Remove 2 damage counters from Meganium.",
			},
			damage: 60,

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
			value: "-20"
		},
	],




}

export default card
