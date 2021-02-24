import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Vibrava",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		329,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Trapinch",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Levitate",
			},
			effect: {
				en: "If Vibrava has any basic Energy cards attached to it, Vibrava's Retreat Cost is 0.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Razor Wing",
			},

			damage: 20,

		},
	],






}

export default card
