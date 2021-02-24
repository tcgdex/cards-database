import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Rayquaza ex",
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		384,
	],
	hp: 100,
	types: [
		"Colorless",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spiral Growth",
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, search your discard pile for a basic Energy card and attach it to Rayquaza ex.",
			},

		},
		{
			cost: [
				"Fire",
				"Lightning",
			],
			name: {
				en: "Dragon Burst",
			},
			effect: {
				en: "Discard either all Fire Energy or all Lightning Energy attached to Rayquaza ex. This attack does 40 damage times the amount of Fire or Lightning Energy discarded.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
		{
			type: "Water",
			value: "-30"
		},
	],




}

export default card
