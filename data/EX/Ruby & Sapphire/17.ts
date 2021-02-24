import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Donphan",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		232,
	],
	hp: 80,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Phanpy",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Rend",
			},
			effect: {
				en: "If the Defending Pokémon has any damage counters on it, this attack does 20 damage plus 20 more damage.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Spin",
			},
			effect: {
				en: "Flip 2 coins. This attack does 60 damage times the number of heads.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
