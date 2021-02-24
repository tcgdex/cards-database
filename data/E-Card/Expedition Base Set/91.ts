import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Quilava",
	},
	illustrator: "Asuka Iwashita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		156,
	],
	hp: 70,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Cyndaquil",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Super Singe",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
