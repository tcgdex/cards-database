import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Forretress",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		205,
	],
	hp: 70,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Pineco",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spinning Blow",
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads. If both coins are heads, switch Forretress with 1 of your Benched Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Scatterbomb",
			},
			effect: {
				en: "Flip 2 coins. For each heads, do 10 damage to each of your opponent's Benched Pokémon. For each tails, do 10 damage to each of your own Benched Pokémon. (Don't apply Weakness or Resistance for Benched Pokémon.)",
			},
			damage: 40,

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
