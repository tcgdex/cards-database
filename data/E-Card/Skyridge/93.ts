import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Sandslash",
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		28,
	],
	hp: 70,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Sandshrew",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Sand Trap",
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose up to 2 of them. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 10,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Needle Rush",
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads. If you get at least 1 heads, the Defending Pokémon is now Poisoned.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],




}

export default card
