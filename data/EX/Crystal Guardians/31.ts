import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Combusken",
	},
	illustrator: "Sachiko Adachi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		256,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Torchic",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Searing Flame",
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Firebreathing",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage.",
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
