import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Jumpluff",
	},
	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		189,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Skiploom",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Fluff",
			},
			effect: {
				en: "During your opponent's turn, if Jumpluff would be damaged or affected by an opponent's attack and it already has at least 1 damage counter on it, flip a coin. If heads, prevent all effects of that attack (including damage).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Cotton Punch",
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
			},
			damage: 30,

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
