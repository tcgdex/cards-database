import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Aggron",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		306,
	],
	hp: 110,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Lairon",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Retaliate",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage times the number of damage counters on Aggron.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Punch",
			},

			damage: 40,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Lariat",
			},
			effect: {
				en: "Flip 2 coins. This attack does 70 damage times the number of heads.",
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
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
