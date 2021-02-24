import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Bayleef",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		153,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Chikorita",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hammer In",
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
			},

			damage: 50,

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
